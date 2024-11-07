import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { CreateCommentRequest } from '../interfaces';

export class CreateCommentDto implements CreateCommentRequest{
    @IsString()
    @IsNotEmpty()
    text: string;

    @IsInt()
    @IsNotEmpty()
    user_id: number;

    @IsInt()
    @IsNotEmpty()
    movie_id: number;
}
