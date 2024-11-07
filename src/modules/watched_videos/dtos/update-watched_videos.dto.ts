import {  IsInt } from 'class-validator';
import { CreateWatchedVideoRequest } from '../interfaces';

export class UpdateWatchedVideoDto implements Omit<CreateWatchedVideoRequest, 'id'> {
    @IsInt()
    user_id: number;

    @IsInt()
    movie_id: number;
}
