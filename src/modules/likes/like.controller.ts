import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { LikesService } from "./like.service";
import { Likes } from "./models";
import { CreateLikeDto, UpdateLikeDto } from "./dtos";

@ApiTags('Likes')
@Controller('likes')
export class LikesController {
    constructor(private readonly likesService: LikesService) {}

    @Get()
    async getAllLikes(): Promise<Likes[]> {
        return await this.likesService.getAllLikes();
    }

    @Get("/:id")
    async getSingleLike(@Param('id') id: string): Promise<Likes> {
        return await this.likesService.getSingleLike(+id);
    }

    @Post('/add')
    async createLike(@Body() createLikePayload: CreateLikeDto): Promise<{ message: string, new_like: Likes }> {
        return await this.likesService.createLike(createLikePayload);
    }

    @Patch('update/:id')
    async updateLike(
        @Param('id') id: string,
        @Body() updateLikePayload: UpdateLikeDto
    ): Promise<{ message: string, updatedLike: Likes }> {
        return await this.likesService.updateLike(+id, updateLikePayload);
    }

    @Delete('/delete/:id')
    async deleteLike(@Param('id') id: string): Promise<{ message: string }> {
        return await this.likesService.deleteLike(+id);
    }
}
