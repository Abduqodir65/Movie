import { IsBoolean, IsNotEmpty, IsString, IsEmail, IsOptional, IsEnum } from 'class-validator';
import { CreateUserRequest } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { UserRoles } from '../models';

export class CreateUserDto implements Omit<CreateUserRequest, 'image'> {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    is_premium: boolean;
    
    @ApiProperty({
        enum: UserRoles,
        name: "Role",
        required: false,
    })
    @IsOptional()
    @IsEnum(UserRoles)
    role: UserRoles;

    image: any;

}