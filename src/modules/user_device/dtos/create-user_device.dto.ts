import { IsNotEmpty, IsString, IsInt, IsDate } from 'class-validator';

export class CreateUserDeviceDto {
    @IsNotEmpty()
    @IsInt()
    userId: number;

    @IsNotEmpty()
    @IsDate()
    loginTime:Date

    @IsNotEmpty()
    @IsString()
    device: string;

}
