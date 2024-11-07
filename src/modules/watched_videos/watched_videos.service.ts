import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { WatchedVideos } from "./models";
import { CreateWatchedVideoDto, UpdateWatchedVideoDto } from './dtos';

@Injectable()
export class WatchedVideosService {
    constructor(@InjectModel(WatchedVideos) private watchedVideosModel: typeof WatchedVideos) {}

    async getAllWatchedVideos(): Promise<WatchedVideos[]> {
        return await this.watchedVideosModel.findAll();
    }

    async getSingleWatchedVideo(id: number): Promise<WatchedVideos> {
        return await this.watchedVideosModel.findOne({ where: { id } });
    }

    async createWatchedVideo(payload: CreateWatchedVideoDto): Promise<{ message: string; new_watchedVideo: WatchedVideos }> {
        const new_watchedVideo = await this.watchedVideosModel.create({
            user_id:payload.user_id,
            movie_id: payload.movie_id
        });
        return { message: 'Watched video created successfully', new_watchedVideo };
    }

    async updateWatchedVideo(id: number, payload: UpdateWatchedVideoDto): Promise<{ message: string, updatedWatchedVideo: WatchedVideos }> {
        await this.watchedVideosModel.update(payload, { where: { id } });
        const updatedWatchedVideo = await this.watchedVideosModel.findOne({ where: { id } });
        return { message: 'Watched video updated successfully', updatedWatchedVideo };
    }

    async deleteWatchedVideo(id: number): Promise<{ message: string }> {
        const watchedVideo = await this.watchedVideosModel.findByPk(id);
        await watchedVideo.destroy();
        return { message: 'Watched video deleted successfully' };
    }
}
