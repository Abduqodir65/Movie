import { VerifyCallback } from 'passport-google-oauth20';
declare const GoogleStrategy_base: new (...args: any[]) => any;
export declare class GoogleStrategy extends GoogleStrategy_base {
    constructor();
    authorizationParams(options: any): object;
    validate(accessToken: string, refreshToken: string, profile: any, cb: VerifyCallback): Promise<any>;
}
export {};
