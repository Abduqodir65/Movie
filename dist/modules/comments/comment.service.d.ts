import { Comments } from "./models";
import { CreateCommentDto, UpdateCommentDto } from './dtos';
export declare class CommentsService {
    private commentsModel;
    constructor(commentsModel: typeof Comments);
    getAllComments(): Promise<Comments[]>;
    getSingleComment(id: number): Promise<Comments>;
    createComment(payload: CreateCommentDto): Promise<{
        message: string;
        new_comment: Comments;
    }>;
    updateComment(id: number, payload: UpdateCommentDto): Promise<{
        message: string;
        updatedComment: Comments;
    }>;
    deleteComment(id: number): Promise<{
        message: string;
    }>;
}
