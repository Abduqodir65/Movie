import { IsString,IsEmail, IsInt, IsNumberString } from 'class-validator';
import { CreateMovieRequest } from '../interfaces';

export class UpdateMovieDto implements Omit<CreateMovieRequest, 'image'> {
    @IsString()
    title: string;
    
    @IsEmail()
    description: string;

    @IsString()
    director: string;

    @IsInt()
    rating: number;

    @IsString()
    language: string;

    @IsNumberString()
    duration: number;

    @IsNumberString()
    year: number;

    image: any;

    video:any

    @IsInt()
    user_id: number;
}