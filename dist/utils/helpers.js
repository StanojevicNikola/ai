"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeString = exports.escapePercentage = exports.escapeUnderscore = exports.setFilter = exports.checkIfObjectNotEmpty = exports.removeFromStringArray = void 0;
exports.removeFromStringArray = (array, value) => {
    const index = array.indexOf(value);
    if (index > -1) {
        array.splice(index, 1);
    }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.checkIfObjectNotEmpty = (obj) => {
    if (obj.constructor === Object && Object.keys(obj).length > 0) {
        return true;
    }
    return false;
};
exports.setFilter = (filter, limit = 100) => {
    if (!filter.limit || filter.limit > limit) {
        Object.assign(filter, { limit });
    }
    if (!filter.offset || filter.offset < 0) {
        Object.assign(filter, { offset: 0 });
    }
    return filter;
};
exports.escapeUnderscore = (string) => {
    return string.replace(/_/g, `\\_`);
};
exports.escapePercentage = (string) => {
    return string.replace(/%/g, `\\%`);
};
exports.escapeString = (string) => {
    return exports.escapeUnderscore(exports.escapePercentage(string));
};
//# sourceMappingURL=helpers.js.map