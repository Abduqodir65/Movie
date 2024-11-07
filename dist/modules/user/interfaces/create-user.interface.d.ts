import { UserRoles } from "../models";
export declare interface CreateUserRequest {
    username: string;
    email: string;
    password: string;
    is_premium: boolean;
    role: UserRoles;
    image: string;
}
