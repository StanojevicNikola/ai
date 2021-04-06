"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServiceOperations = void 0;
const config_1 = require("../config");
const getBasicAuth = () => {
    const username = config_1.userServiceConfig.username;
    const password = config_1.userServiceConfig.password;
    return Buffer.from(`${username}:${password}`).toString('base64');
};
exports.userServiceOperations = (USER_SERVICE_BASEURL) => {
    return [
        {
            template: {
                method: 'DELETE',
                url: `${USER_SERVICE_BASEURL}/users/{email}`,
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
        {
            template: {
                method: 'POST',
                url: `${USER_SERVICE_BASEURL}/registerFbl`,
                options: {
                    headers: {
                        Authorization: `Basic ${getBasicAuth()}`,
                    },
                },
                body: '{body}',
            },
            functions: {
                registerFbl: ['body'],
            },
        },
    ];
};
//# sourceMappingURL=user-service.operations.js.map