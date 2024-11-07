import { CommentsService } from "./comment.service";
import { Comments } from "./models";
import { CreateCommentDto, UpdateCommentDto } from "./dtos";
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    getAllComments(): Promise<Comments[]>;
    getSingleComment(id: string): Promise<Comments>;
    createComment(createCommentPayload: CreateCommentDto): Promise<{
        message: string;
        new_comment: Comments;
    }>;
    updateComment(id: string, updateCommentPayload: UpdateCommentDto): Promise<{
        message: string;
        updatedComment: Comments;
    }>;
    deleteComment(id: string): Promise<{
        message: string;
    }>;
}
