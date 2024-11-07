import { WatchedVideosService } from "./watched_videos.service";
import { WatchedVideos } from "./models";
import { CreateWatchedVideoDto, UpdateWatchedVideoDto } from './dtos';
export declare class WatchedVideosController {
    private readonly watchedVideosService;
    constructor(watchedVideosService: WatchedVideosService);
    getAllWatchedVideos(): Promise<WatchedVideos[]>;
    getSingleWatchedVideo(id: string): Promise<WatchedVideos>;
    createWatchedVideo(createWatchedVideoPayload: CreateWatchedVideoDto): Promise<{
        message: string;
        new_watchedVideo: WatchedVideos;
    }>;
    updateWatchedVideo(id: string, updateWatchedVideoPayload: UpdateWatchedVideoDto): Promise<{
        message: string;
        updatedWatchedVideo: WatchedVideos;
    }>;
    deleteWatchedVideo(id: string): Promise<{
        message: string;
    }>;
}
