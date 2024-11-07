import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateGenreMovieRequest } from '../interfaces'; 

export class CreateGenreMovieDto implements CreateGenreMovieRequest {
    @IsNumber()
    @IsNotEmpty()
    movie_id: number;

    @IsNumber()
    @IsNotEmpty()
    genre_id: number;
}
