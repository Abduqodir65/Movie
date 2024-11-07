import { CreateWatchedVideoRequest } from '../interfaces';
export declare class CreateWatchedVideoDto implements Omit<CreateWatchedVideoRequest, 'id'> {
    user_id: number;
    movie_id: number;
}
