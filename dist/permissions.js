"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppPermissions = exports.PermissionNames = void 0;
const fbl_type_schema_1 = require("@footballerista-llc/fbl-type-schema");
var PermissionNames;
(function (PermissionNames) {
    PermissionNames["PERSONAL_USER_ATHLETE_READ"] = "PERSONAL_USER_ATHLETE_READ";
    PermissionNames["PERSONAL_USER_FAN_READ"] = "PERSONAL_USER_FAN_READ";
    PermissionNames["PERSONAL_USER_CLUB_READ"] = "PERSONAL_USER_CLUB_READ";
    PermissionNames["PERSONAL_USER_FBL_READ"] = "PERSONAL_USER_FBL_READ";
    PermissionNames["PERSONAL_USER_ATHLETE_WRITE"] = "PERSONAL_USER_ATHLETE_WRITE";
    PermissionNames["PERSONAL_USER_FAN_WRITE"] = "PERSONAL_USER_FAN_WRITE";
    PermissionNames["PERSONAL_USER_CLUB_WRITE"] = "PERSONAL_USER_CLUB_WRITE";
    PermissionNames["PERSONAL_USER_FBL_WRITE"] = "PERSONAL_USER_FBL_WRITE";
    PermissionNames["PERSONAL_USER_DELETE"] = "PERSONAL_USER_DELETE";
    PermissionNames["BUSINESS_USER_SUPPORT_READ"] = "BUSINESS_USER_SUPPORT_READ";
    PermissionNames["BUSINESS_USER_INVESTMENT_READ"] = "BUSINESS_USER_INVESTMENT_READ";
    PermissionNames["BUSINESS_USER_PRODUCT_READ"] = "BUSINESS_USER_PRODUCT_READ";
    PermissionNames["BUSINESS_USER_SUPPORT_WRITE"] = "BUSINESS_USER_SUPPORT_WRITE";
    PermissionNames["BUSINESS_USER_INVESTMENT_WRITE"] = "BUSINESS_USER_INVESTMENT_WRITE";
    PermissionNames["BUSINESS_USER_PRODUCT_WRITE"] = "BUSINESS_USER_PRODUCT_WRITE";
    PermissionNames["BUSINESS_USER_DELETE"] = "BUSINESS_USER_DELETE";
    PermissionNames["ADMIN_USER_SUPER"] = "ADMIN_USER_SUPER";
    PermissionNames["ADMIN_USER_LOGS"] = "ADMIN_USER_LOGS";
})(PermissionNames = exports.PermissionNames || (exports.PermissionNames = {}));
exports.AppPermissions = {
    personalUserAthleteRead: {
        name: PermissionNames.PERSONAL_USER_ATHLETE_READ,
        description: 'personal user athlete read',
        type: fbl_type_schema_1.UserType.ATHLETE,
    },
    personalUserFanRead: {
        name: PermissionNames.PERSONAL_USER_FAN_READ,
        description: 'personal user fan read',
        type: fbl_type_schema_1.UserType.FAN,
    },
    personalUserClubRead: {
        name: PermissionNames.PERSONAL_USER_CLUB_READ,
        description: 'personal user club read',
        type: fbl_type_schema_1.UserType.CLUB,
    },
    personalUserFblRead: {
        name: PermissionNames.PERSONAL_USER_FBL_READ,
        description: 'personal user fbl read',
        type: fbl_type_schema_1.UserType.FBL,
    },
    personalUserAthleteWrite: {
        name: PermissionNames.PERSONAL_USER_ATHLETE_WRITE,
        description: 'personal user athlete write',
        type: fbl_type_schema_1.UserType.ATHLETE,
    },
    personalUserFanWrite: {
        name: PermissionNames.PERSONAL_USER_FAN_WRITE,
        description: 'personal user fan write',
        type: fbl_type_schema_1.UserType.FAN,
    },
    personalUserClubWrite: {
        name: PermissionNames.PERSONAL_USER_CLUB_WRITE,
        description: 'personal user club write',
        type: fbl_type_schema_1.UserType.CLUB,
    },
    personalUserFblWrite: {
        name: PermissionNames.PERSONAL_USER_FBL_WRITE,
        description: 'personal user fbl write',
        type: fbl_type_schema_1.UserType.FBL,
    },
    businessUserSupportRead: {
        name: PermissionNames.BUSINESS_USER_SUPPORT_READ,
        description: 'business user support read',
        type: fbl_type_schema_1.BusinessType.SUPPORT,
    },
    businessUserInvestmentRead: {
        name: PermissionNames.BUSINESS_USER_INVESTMENT_READ,
        description: 'business user investment read',
        type: fbl_type_schema_1.BusinessType.INVESTMENT,
    },
    businessUserProductRead: {
        name: PermissionNames.BUSINESS_USER_PRODUCT_READ,
        description: 'business user product read',
        type: fbl_type_schema_1.BusinessType.PRODUCT,
    },
    businessUserSupportWrite: {
        name: PermissionNames.BUSINESS_USER_SUPPORT_WRITE,
        description: 'business user support write',
        type: fbl_type_schema_1.BusinessType.SUPPORT,
    },
    businessUserInvestmentWrite: {
        name: PermissionNames.BUSINESS_USER_INVESTMENT_WRITE,
        description: 'business user investment write',
        type: fbl_type_schema_1.BusinessType.INVESTMENT,
    },
    businessUserProductWrite: {
        name: PermissionNames.BUSINESS_USER_PRODUCT_WRITE,
        description: 'business user product write',
        type: fbl_type_schema_1.BusinessType.PRODUCT,
    },
    personalUserDelete: {
        name: PermissionNames.PERSONAL_USER_DELETE,
        description: 'personal user delete',
        type: null,
    },
    businessUserDelete: {
        name: PermissionNames.BUSINESS_USER_DELETE,
        description: 'business user delete',
        type: null,
    },
    adminUserSuper: {
        name: PermissionNames.ADMIN_USER_SUPER,
        description: 'admin user super',
        type: null,
    },
    adminUserLogs: {
        name: PermissionNames.ADMIN_USER_LOGS,
        description: 'admin user logs',
        type: null,
    },
};
//# sourceMappingURL=permissions.js.map