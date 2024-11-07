import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Likes } from "./models";
import { CreateLikeDto, UpdateLikeDto } from './dtos';

@Injectable()
export class LikesService {
    constructor(@InjectModel(Likes) private likesModel: typeof Likes) {}

    async getAllLikes(): Promise<Likes[]> {
        return await this.likesModel.findAll();
    }

    async getSingleLike(id: number): Promise<Likes> {
        return await this.likesModel.findOne({ where: { id } });
    }

    async createLike(payload: CreateLikeDto): Promise<{ message: string; new_like: Likes }> {
        const new_like = await this.likesModel.create({
            user_id:payload.user_id,
            movie_id: payload.movie_id
        });
        return { message: 'Like created successfully', new_like };
    }

    async updateLike(id: number, payload: UpdateLikeDto): Promise<{ message: string, updatedLike: Likes }> {
        await this.likesModel.update(payload, { where: { id } });
        const updatedLike = await this.likesModel.findOne({ where: { id } });
        return { message: 'Like updated successfully', updatedLike };
    }

    async deleteLike(id: number): Promise<{ message: string }> {
        const like = await this.likesModel.findByPk(id);
        await like.destroy();
        return { message: 'Like deleted successfully' };
    }
}
