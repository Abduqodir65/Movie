import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CommentsService } from "./comment.service"; 
import { Comments } from "./models";
import { CreateCommentDto, UpdateCommentDto } from "./dtos";

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @Get()
    async getAllComments(): Promise<Comments[]> {
        return await this.commentsService.getAllComments();
    }

    @Get("/:id")
    async getSingleComment(@Param('id') id: string): Promise<Comments> {
        return await this.commentsService.getSingleComment(+id);
    }

    @Post('/add')
    async createComment(@Body() createCommentPayload: CreateCommentDto): Promise<{ message: string, new_comment: Comments }> {
        return await this.commentsService.createComment(createCommentPayload);
    }

    @Patch('update/:id')
    async updateComment(
        @Param('id') id: string,
        @Body() updateCommentPayload: UpdateCommentDto
    ): Promise<{ message: string, updatedComment: Comments }> {
        return await this.commentsService.updateComment(+id, updateCommentPayload);
    }

    @Delete('/delete/:id')
    async deleteComment(@Param('id') id: string): Promise<{ message: string }> {
        return await this.commentsService.deleteComment(+id);
    }
}
