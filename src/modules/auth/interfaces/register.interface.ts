export declare interface RegisterRequest {
    username: string;
    email: string;
    password:string
}

export declare interface RegisterResponse {
    accessToken: string;
    refreshToken: string;
    message: string;
}