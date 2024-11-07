import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Comments } from "./models";
import { CreateCommentDto, UpdateCommentDto } from './dtos';

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comments) private commentsModel: typeof Comments) { }

    async getAllComments(): Promise<Comments[]> {
        return await this.commentsModel.findAll();
    }

    async getSingleComment(id: number): Promise<Comments> {
        return await this.commentsModel.findOne({ where: { id } });
    }

    async createComment(payload: CreateCommentDto): Promise<{ message: string; new_comment: Comments }> {
        const new_comment = await this.commentsModel.create({
            text:payload.text,
            user_id:payload.user_id,
            movie_id:payload.movie_id
        });
        return { message: 'Comment created successfully', new_comment };
    }

    async updateComment(id: number, payload: UpdateCommentDto): Promise<{ message: string, updatedComment: Comments }> {
        await this.commentsModel.update(payload, { where: { id } });
        const updatedComment = await this.commentsModel.findOne({ where: { id } });
        return { message: 'Comment updated successfully', updatedComment };
    }

    async deleteComment(id: number): Promise<{ message: string }> {
        const comment = await this.commentsModel.findByPk(id);
        await comment.destroy();
        return { message: 'Comment deleted successfully' };
    }
}
