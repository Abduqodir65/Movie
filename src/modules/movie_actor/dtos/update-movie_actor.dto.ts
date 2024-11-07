import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateMovieActorRequest } from '../interfaces'; // To'g'ri yo'lni qo'shing

export class UpdateMovieActorDto implements CreateMovieActorRequest {
    @IsNumber()
    @IsNotEmpty()
    movie_id: number;

    @IsNumber()
    @IsNotEmpty()
    actor_id: number;
}
