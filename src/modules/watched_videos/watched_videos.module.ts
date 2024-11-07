import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { WatchedVideos } from "./models";
import { WatchedVideosService } from "./watched_videos.service"; 
import { WatchedVideosController } from "./watched_videos.controller";

@Module({
    imports: [SequelizeModule.forFeature([WatchedVideos])],
    providers: [WatchedVideosService],
    controllers: [WatchedVideosController]
})
export class WatchedVideosModule { }
