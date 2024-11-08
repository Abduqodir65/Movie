export declare class AppController {
    root(): {
        message: string;
    };
    about(): {
        info: string;
    };
    login(): {
        info: string;
    };
    home(): {
        info: string;
    };
    forgotPassword(): {
        text: string;
    };
    getResetPasswordPage(token: string): Promise<{
        token: string;
    }>;
    movieDeatil(): {
        info: string;
    };
    profile(): {
        info: string;
    };
}
