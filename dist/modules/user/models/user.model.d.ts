import { Model } from 'sequelize-typescript';
export declare enum UserRoles {
    user = "USER",
    admin = "ADMIN"
}
export declare class User extends Model {
    username: string;
    email: string;
    password: string;
    is_premium: boolean;
    role: UserRoles;
    image: string;
    passwordResetToken: string;
    passwordResetTokenExpireTime: Date;
}
