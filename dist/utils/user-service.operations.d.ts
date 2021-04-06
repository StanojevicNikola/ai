export declare const userServiceOperations: (USER_SERVICE_BASEURL: string) => ({
    template: {
        method: string;
        url: string;
        options: {
            headers: {
                Authorization: string;
            };
        };
        body?: undefined;
    };
    functions: {
        deleteUser: string[];
        registerFbl?: undefined;
    };
} | {
    template: {
        method: string;
        url: string;
        options: {
            headers: {
                Authorization: string;
            };
        };
        body: string;
    };
    functions: {
        registerFbl: string[];
        deleteUser?: undefined;
    };
})[];
