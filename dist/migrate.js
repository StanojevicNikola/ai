"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrate = void 0;
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const application_1 = require("./application");
const permissions_1 = require("./permissions");
const db_1 = require("./utils/db");
async function migrate(args) {
    dotenv_1.default.config();
    const existingSchema = args.includes('--rebuild') ? 'drop' : 'alter';
    console.log('Migrating schemas (%s existing schema)', existingSchema);
    const app = new application_1.FootballeristaAIService();
    await app.boot();
    const adminPostgresDatasource = await app.get('datasources.AdminPostgres');
    await adminPostgresDatasource.autoupdate(db_1.modelsToMigrate);
    const populatePermissions = `
    DO
    $do$
    BEGIN
      IF (SELECT count(*) FROM public.permission) = 0 THEN
      INSERT INTO public.permission (name, created_at, type, description)
      VALUES
      ${Object.values(permissions_1.AppPermissions).reduce((accumulator, currentValue) => {
        return `${accumulator ? `${accumulator}, ` : ``}('${currentValue.name}', NOW(),${currentValue.type ? `'${currentValue.type}'` : null}, '${currentValue.description}')`;
    }, '')};
      END IF;
    END
    $do$
  `;
    await (await app.getRepository(PermissionRepository)).execute(populatePermissions, []);
    await db_1.createTriggers(app);
    // Connectors usually keep a pool of opened connections,
    // this keeps the process running even after all work is done.
    // We need to exit explicitly.
    process.exit(0);
}
exports.migrate = migrate;
migrate(process.argv).catch(err => {
    console.error('Cannot migrate database schema', err);
    process.exit(1);
});
//# sourceMappingURL=migrate.js.map