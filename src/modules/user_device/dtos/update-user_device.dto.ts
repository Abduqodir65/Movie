import { IsNotEmpty, IsString, IsInt, IsDate } from 'class-validator';

export class UpdateUserDeviceDto {
    @IsInt()
    userId: number;

    @IsDate()
    loginTime:Date

    @IsString()
    device: string;

}
