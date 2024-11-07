import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateMovieActorRequest } from '../interfaces'; 

export class CreateMovieActorDto implements CreateMovieActorRequest {
    @IsNumber()
    @IsNotEmpty()
    movie_id: number;

    @IsNumber()
    @IsNotEmpty()
    actor_id: number;
}
