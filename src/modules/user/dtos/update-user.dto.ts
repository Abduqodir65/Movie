import { IsBoolean, IsEnum, IsString } from 'class-validator';
import { CreateUserRequest } from '../interfaces';
import { UserRoles } from '../models';

export class UpdateUserDto implements Omit<CreateUserRequest, 'image'> {
    @IsString()
    username: string;
    
    @IsString()
    email: string;
    
    @IsString()
    password: string;


    @IsString()
    is_premium: boolean;

    @IsEnum(UserRoles)
    role: UserRoles;

    image: any;
}