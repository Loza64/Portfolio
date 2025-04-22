export declare const configMailer: {
    transport: {
        host: string | undefined;
        port: number;
        secure: boolean;
        auth: {
            user: string | undefined;
            pass: string | undefined;
        };
        defaults: {
            from: string;
        };
    };
};
export declare const configPipe: {
    transform: boolean;
    whitelist: boolean;
    forbidNonWhitelisted: boolean;
};
