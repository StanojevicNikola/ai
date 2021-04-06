export declare const removeFromStringArray: (array: string[], value: string) => void;
export declare const checkIfObjectNotEmpty: (obj: any) => boolean;
export declare const setFilter: (filter: {
    limit?: number | undefined;
    offset?: number | undefined;
}, limit?: number) => {
    limit?: number | undefined;
    offset?: number | undefined;
};
export declare const escapeUnderscore: (string: string) => string;
export declare const escapePercentage: (string: string) => string;
export declare const escapeString: (string: string) => string;
