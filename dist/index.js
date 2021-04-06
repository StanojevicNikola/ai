"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.FootballeristaAIService = void 0;
const application_1 = require("./application");
Object.defineProperty(exports, "FootballeristaAIService", { enumerable: true, get: function () { return application_1.FootballeristaAIService; } });
async function main(options = {}) {
    const app = new application_1.FootballeristaAIService(options);
    await app.boot();
    await app.start();
    const url = app.restServer.url;
    console.log('----------------------------------------');
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}/ping`);
    console.log('----------------------------------------');
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map