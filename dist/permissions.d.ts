import { BusinessType, UserType } from '@footballerista-llc/fbl-type-schema';
export declare enum PermissionNames {
    PERSONAL_USER_ATHLETE_READ = "PERSONAL_USER_ATHLETE_READ",
    PERSONAL_USER_FAN_READ = "PERSONAL_USER_FAN_READ",
    PERSONAL_USER_CLUB_READ = "PERSONAL_USER_CLUB_READ",
    PERSONAL_USER_FBL_READ = "PERSONAL_USER_FBL_READ",
    PERSONAL_USER_ATHLETE_WRITE = "PERSONAL_USER_ATHLETE_WRITE",
    PERSONAL_USER_FAN_WRITE = "PERSONAL_USER_FAN_WRITE",
    PERSONAL_USER_CLUB_WRITE = "PERSONAL_USER_CLUB_WRITE",
    PERSONAL_USER_FBL_WRITE = "PERSONAL_USER_FBL_WRITE",
    PERSONAL_USER_DELETE = "PERSONAL_USER_DELETE",
    BUSINESS_USER_SUPPORT_READ = "BUSINESS_USER_SUPPORT_READ",
    BUSINESS_USER_INVESTMENT_READ = "BUSINESS_USER_INVESTMENT_READ",
    BUSINESS_USER_PRODUCT_READ = "BUSINESS_USER_PRODUCT_READ",
    BUSINESS_USER_SUPPORT_WRITE = "BUSINESS_USER_SUPPORT_WRITE",
    BUSINESS_USER_INVESTMENT_WRITE = "BUSINESS_USER_INVESTMENT_WRITE",
    BUSINESS_USER_PRODUCT_WRITE = "BUSINESS_USER_PRODUCT_WRITE",
    BUSINESS_USER_DELETE = "BUSINESS_USER_DELETE",
    ADMIN_USER_SUPER = "ADMIN_USER_SUPER",
    ADMIN_USER_LOGS = "ADMIN_USER_LOGS"
}
export declare const AppPermissions: {
    personalUserAthleteRead: {
        name: PermissionNames;
        description: string;
        type: UserType;
    };
    personalUserFanRead: {
        name: PermissionNames;
        description: string;
        type: UserType;
    };
    personalUserClubRead: {
        name: PermissionNames;
        description: string;
        type: UserType;
    };
    personalUserFblRead: {
        name: PermissionNames;
        description: string;
        type: UserType;
    };
    personalUserAthleteWrite: {
        name: PermissionNames;
        description: string;
        type: UserType;
    };
    personalUserFanWrite: {
        name: PermissionNames;
        description: string;
        type: UserType;
    };
    personalUserClubWrite: {
        name: PermissionNames;
        description: string;
        type: UserType;
    };
    personalUserFblWrite: {
        name: PermissionNames;
        description: string;
        type: UserType;
    };
    businessUserSupportRead: {
        name: PermissionNames;
        description: string;
        type: BusinessType;
    };
    businessUserInvestmentRead: {
        name: PermissionNames;
        description: string;
        type: BusinessType;
    };
    businessUserProductRead: {
        name: PermissionNames;
        description: string;
        type: BusinessType;
    };
    businessUserSupportWrite: {
        name: PermissionNames;
        description: string;
        type: BusinessType;
    };
    businessUserInvestmentWrite: {
        name: PermissionNames;
        description: string;
        type: BusinessType;
    };
    businessUserProductWrite: {
        name: PermissionNames;
        description: string;
        type: BusinessType;
    };
    personalUserDelete: {
        name: PermissionNames;
        description: string;
        type: null;
    };
    businessUserDelete: {
        name: PermissionNames;
        description: string;
        type: null;
    };
    adminUserSuper: {
        name: PermissionNames;
        description: string;
        type: null;
    };
    adminUserLogs: {
        name: PermissionNames;
        description: string;
        type: null;
    };
};
