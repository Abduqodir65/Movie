import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { WatchedVideosService } from "./watched_videos.service"; 
import { WatchedVideos } from "./models";
import { CreateWatchedVideoDto, UpdateWatchedVideoDto } from './dtos'

@ApiTags('Watched Videos')
@Controller('watched-videos')
export class WatchedVideosController {
    constructor(private readonly watchedVideosService: WatchedVideosService) {}

    @Get()
    async getAllWatchedVideos(): Promise<WatchedVideos[]> {
        return await this.watchedVideosService.getAllWatchedVideos();
    }

    @Get("/:id")
    async getSingleWatchedVideo(@Param('id') id: string): Promise<WatchedVideos> {
        return await this.watchedVideosService.getSingleWatchedVideo(+id);
    }

    @Post('/add')
    async createWatchedVideo(@Body() createWatchedVideoPayload: CreateWatchedVideoDto): Promise<{ message: string, new_watchedVideo: WatchedVideos }> {
        return await this.watchedVideosService.createWatchedVideo(createWatchedVideoPayload);
    }

    @Patch('update/:id')
    async updateWatchedVideo(
        @Param('id') id: string,
        @Body() updateWatchedVideoPayload: UpdateWatchedVideoDto
    ): Promise<{ message: string, updatedWatchedVideo: WatchedVideos }> {
        return await this.watchedVideosService.updateWatchedVideo(+id, updateWatchedVideoPayload);
    }

    @Delete('/delete/:id')
    async deleteWatchedVideo(@Param('id') id: string): Promise<{ message: string }> {
        return await this.watchedVideosService.deleteWatchedVideo(+id);
    }
}
