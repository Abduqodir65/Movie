import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { LoginRequest } from "../interfaces"; 

export class LoginDto implements LoginRequest {
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
        example: "password1234"
    })
    @IsString()
    @IsNotEmpty()
    password: string;


}