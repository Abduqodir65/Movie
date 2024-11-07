import { IsNotEmpty, IsInt } from 'class-validator';
import { CreateWatchedVideoRequest } from '../interfaces';

export class CreateWatchedVideoDto implements Omit<CreateWatchedVideoRequest, 'id'> {
    @IsInt()
    @IsNotEmpty()
    user_id: number;

    @IsInt()
    @IsNotEmpty()
    movie_id: number;
}
