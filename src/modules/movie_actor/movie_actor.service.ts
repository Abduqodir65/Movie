import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { MovieActor } from "./models";
import { CreateMovieActorDto, UpdateMovieActorDto } from "./dtos";

@Injectable()
export class MovieActorService {
    constructor(@InjectModel(MovieActor) private movieActorModel: typeof MovieActor) {}

    async getAllMovieActors(): Promise<MovieActor[]> {
        return await this.movieActorModel.findAll();
    }

    async getSingleMovieActor(id: number): Promise<MovieActor> {
        return await this.movieActorModel.findOne({ where: { id } });
    }

    async createMovieActor(payload: CreateMovieActorDto): Promise<{ message: string; new_movieActor: MovieActor }> {
        const new_movieActor = await this.movieActorModel.create({
            movie_id:payload.movie_id,
            actor_id:payload.actor_id
        });
        return { message: 'MovieActor created successfully', new_movieActor };
    }

    async updateMovieActor(id: number, payload: UpdateMovieActorDto): Promise<{ message: string, updatedMovieActor: MovieActor }> {
        await this.movieActorModel.update(payload, { where: { id } });
        const updatedMovieActor = await this.movieActorModel.findOne({ where: { id } });
        return { message: 'MovieActor updated successfully', updatedMovieActor };
    }

    async deleteMovieActor(id: number): Promise<{ message: string }> {
        const movieActor = await this.movieActorModel.findByPk(id);
        await movieActor.destroy();
        return { message: 'MovieActor deleted successfully' };
    }
}
