"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServiceConfig = exports.basicAuthConfig = void 0;
const { 
// local auth
BASIC_AUTH_USERNAME, BASIC_AUTH_PASSWORD, 
// global auth
GLOBAL_AUTH_USERNAME, GLOBAL_AUTH_PASSWORD, 
// feed service
FEED_SERVICE_BASEURL, FEED_SERVICE_USERNAME, FEED_SERVICE_PASSWORD, } = process.env;
exports.basicAuthConfig = {
    username: BASIC_AUTH_USERNAME !== null && BASIC_AUTH_USERNAME !== void 0 ? BASIC_AUTH_USERNAME : GLOBAL_AUTH_USERNAME,
    password: BASIC_AUTH_PASSWORD !== null && BASIC_AUTH_PASSWORD !== void 0 ? BASIC_AUTH_PASSWORD : GLOBAL_AUTH_PASSWORD,
};
exports.userServiceConfig = {
    url: FEED_SERVICE_BASEURL !== null && FEED_SERVICE_BASEURL !== void 0 ? FEED_SERVICE_BASEURL : 'fbl-user-service',
    username: FEED_SERVICE_USERNAME !== null && FEED_SERVICE_USERNAME !== void 0 ? FEED_SERVICE_USERNAME : GLOBAL_AUTH_USERNAME,
    password: FEED_SERVICE_PASSWORD !== null && FEED_SERVICE_PASSWORD !== void 0 ? FEED_SERVICE_PASSWORD : GLOBAL_AUTH_PASSWORD,
};
//# sourceMappingURL=config.js.map