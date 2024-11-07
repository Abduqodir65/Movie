import { IsNotEmpty, IsString, IsInt, IsNumber, IsNumberString } from 'class-validator';
import { CreateMovieRequest } from '../interfaces';

export class CreateMovieDto implements Omit<CreateMovieRequest, 'image'> {
    @IsString()
    @IsNotEmpty()
    title: string;
    
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    director: string;

    @IsNumberString()
    @IsNotEmpty()
    rating: number;

    @IsString()
    @IsNotEmpty()
    language: string;

    @IsNumberString()
    @IsNotEmpty()
    duration: number;

    @IsNumberString()
    @IsNotEmpty()
    year: number;

    image: any;

    video: any;

    @IsNumberString()
    @IsNotEmpty()
    user_id: number;
}
