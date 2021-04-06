"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApplication = void 0;
const tslib_1 = require("tslib");
const testlab_1 = require("@loopback/testlab");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const __1 = require("../..");
const getFirebaseConfig = (appName) => {
    return {
        name: 'FirebaseAuth',
        connector: '@footballerista-llc/loopback-connector-firebase-auth',
        serviceAccount: '',
        databaseURL: '',
        appName,
    };
};
async function setupApplication(applicationName) {
    dotenv_1.default.config();
    const restConfig = testlab_1.givenHttpServerConfig({
    // Customize the server configuration here.
    // Empty values (undefined, '') will be ignored by the helper.
    //
    // host: process.env.HOST,
    // port: +process.env.PORT,
    });
    const app = new __1.FootballeristaAIService({
        rest: restConfig,
        databaseSeeding: false,
        name: applicationName,
    });
    app
        .bind('datasources.config.FirebaseAuth')
        .toDynamicValue(() => getFirebaseConfig(applicationName));
    await app.boot();
    await app.start();
    const client = testlab_1.createRestAppClient(app);
    return { app, client };
}
exports.setupApplication = setupApplication;
//# sourceMappingURL=test-helper.js.map