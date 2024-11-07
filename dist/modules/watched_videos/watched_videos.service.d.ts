import { WatchedVideos } from "./models";
import { CreateWatchedVideoDto, UpdateWatchedVideoDto } from './dtos';
export declare class WatchedVideosService {
    private watchedVideosModel;
    constructor(watchedVideosModel: typeof WatchedVideos);
    getAllWatchedVideos(): Promise<WatchedVideos[]>;
    getSingleWatchedVideo(id: number): Promise<WatchedVideos>;
    createWatchedVideo(payload: CreateWatchedVideoDto): Promise<{
        message: string;
        new_watchedVideo: WatchedVideos;
    }>;
    updateWatchedVideo(id: number, payload: UpdateWatchedVideoDto): Promise<{
        message: string;
        updatedWatchedVideo: WatchedVideos;
    }>;
    deleteWatchedVideo(id: number): Promise<{
        message: string;
    }>;
}
