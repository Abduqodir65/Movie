import { CreateCommentRequest } from '../interfaces';
export declare class UpdateCommentDto implements Omit<CreateCommentRequest, 'id'> {
    text: string;
    user_id: number;
    movie_id: number;
}
