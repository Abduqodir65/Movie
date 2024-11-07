import { CreateWatchedVideoRequest } from '../interfaces';
export declare class UpdateWatchedVideoDto implements Omit<CreateWatchedVideoRequest, 'id'> {
    user_id: number;
    movie_id: number;
}
