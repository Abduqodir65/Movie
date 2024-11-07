import { CreateCommentRequest } from '../interfaces';
export declare class CreateCommentDto implements CreateCommentRequest {
    text: string;
    user_id: number;
    movie_id: number;
}
