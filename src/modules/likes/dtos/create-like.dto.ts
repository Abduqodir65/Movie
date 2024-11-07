import { IsNotEmpty, IsInt } from 'class-validator';
import { CreateLikeRequest } from '../interfaces';

export class CreateLikeDto implements CreateLikeRequest {
    @IsInt()
    @IsNotEmpty()
    user_id: number;

    @IsInt()
    @IsNotEmpty()
    movie_id: number;
}
