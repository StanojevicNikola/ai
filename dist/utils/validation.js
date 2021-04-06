"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStringLength = exports.checkUsernameRestricted = exports.validateUuidPattern = void 0;
const fbl_type_schema_1 = require("@footballerista-llc/fbl-type-schema");
const rest_1 = require("@loopback/rest");
exports.validateUuidPattern = (name, value) => {
    if (!value) {
        throw rest_1.RestHttpErrors.missingRequired(name);
    }
    if (!value.match(fbl_type_schema_1.uuidPattern)) {
        throw rest_1.RestHttpErrors.invalidData(value, name);
    }
};
exports.checkUsernameRestricted = (username) => {
    const validUsernameRegex = new RegExp(/^(^(?!\w*?f\w*?[o0]\w*?[o0]\w*?t\w*?b\w*?a\w*?[l1]\w*?[l1]\w*?e\w*?r\w*?i\w*?s\w*?t\w*?a\w*?)\w+)$/, 'g');
    return !validUsernameRegex.test(username);
};
exports.validateStringLength = (string, minLength, maxLength, path) => {
    const message = 'The request body is invalid. See error object `details` property for more info.';
    const code = 'VALIDATION_FAILED';
    if (string.length < minLength) {
        const error = new rest_1.HttpErrors.UnprocessableEntity();
        const errorDetails = {
            path,
            code: 'minLength',
            message: `should NOT be shorter than ${minLength} characters`,
            info: {
                limit: minLength,
            },
        };
        Object.assign(error, {
            message,
            code,
            details: errorDetails,
        });
        throw error;
    }
    if (string.length > maxLength) {
        const error = new rest_1.HttpErrors.UnprocessableEntity();
        const errorDetails = {
            path,
            code: 'maxLength',
            message: `should NOT be longer than ${maxLength} characters`,
            info: {
                limit: maxLength,
            },
        };
        Object.assign(error, {
            message,
            code,
            details: errorDetails,
        });
        throw error;
    }
};
//# sourceMappingURL=validation.js.map