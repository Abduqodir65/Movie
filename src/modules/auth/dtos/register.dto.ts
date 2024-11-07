import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { RegisterRequest } from "../interfaces";

export class RegisterDto implements RegisterRequest {
    @ApiProperty({
        type: "string",
        required: true,
        example: "John Old"
    })
    @IsString()
    @IsNotEmpty()
    username: string;
    
    @ApiProperty({
        type: "string",
        required: true,
        example: "john_old@gmail.com"
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;


    @ApiProperty({
        type: "string",
        required: true,
        example: "password123",
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}