import {  IsNumber } from 'class-validator';
import { CreateGenreMovieRequest } from '../interfaces'; 

export class UpdateGenreMovieDto implements CreateGenreMovieRequest {
    @IsNumber()
    movie_id: number;

    @IsNumber()
    genre_id: number;
}
