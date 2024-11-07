import { CreateUserRequest } from '../interfaces';
import { UserRoles } from '../models';
export declare class CreateUserDto implements Omit<CreateUserRequest, 'image'> {
    username: string;
    email: string;
    password: string;
    is_premium: boolean;
    role: UserRoles;
    image: any;
}
