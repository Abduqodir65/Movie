import { IsInt } from 'class-validator';
import { CreateLikeRequest } from '../interfaces';

export class UpdateLikeDto implements CreateLikeRequest {
    @IsInt()
    user_id: number;

    @IsInt()
    movie_id: number;
}
