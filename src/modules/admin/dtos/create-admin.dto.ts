import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAdminDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
