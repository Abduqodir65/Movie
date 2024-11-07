import { IsString, IsInt } from 'class-validator';
import { CreateCommentRequest } from '../interfaces';

export class UpdateCommentDto implements Omit<CreateCommentRequest, 'id'> {
    @IsString()
    text: string;

    @IsInt()
    user_id: number;

    @IsInt()
    movie_id: number;
}
