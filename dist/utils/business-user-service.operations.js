"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessUserServiceOperations = void 0;
const config_1 = require("../config");
const getBasicAuth = () => {
    const username = config_1.businessUserServiceConfig.username;
    const password = config_1.businessUserServiceConfig.password;
    return Buffer.from(`${username}:${password}`).toString('base64');
};
exports.businessUserServiceOperations = (BUSINESS_USER_SERVICE_BASEURL) => {
    return [
        {
            template: {
                method: 'DELETE',
                url: `${BUSINESS_USER_SERVICE_BASEURL}/users/{email}`,
                options: {
                    headers: {
                        Authorization: `Basic ${getBasicAuth()}`,
                    },
                },
            },
            functions: {
                deleteUser: ['email'],
            },
        },
    ];
};
//# sourceMappingURL=business-user-service.operations.js.map