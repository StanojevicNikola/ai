export declare const businessUserServiceOperations: (BUSINESS_USER_SERVICE_BASEURL: string) => {
    template: {
        method: string;
        url: string;
        options: {
            headers: {
                Authorization: string;
            };
        };
    };
    functions: {
        deleteUser: string[];
    };
}[];
