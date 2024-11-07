import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { GenreMovie } from "./models";
import { CreateGenreMovieDto, UpdateGenreMovieDto } from "./dtos";

@Injectable()
export class GenreMovieService {
    constructor(@InjectModel(GenreMovie) private genreMovieModel: typeof GenreMovie) {}

    async getAllGenreMovies(): Promise<GenreMovie[]> {
        return await this.genreMovieModel.findAll();
    }

    async getSingleGenreMovie(id: number): Promise<GenreMovie> {
        return await this.genreMovieModel.findOne({ where: { id } });
    }

    async createGenreMovie(payload: CreateGenreMovieDto): Promise<{ message: string; new_genreMovie: GenreMovie }> {
        const new_genreMovie = await this.genreMovieModel.create({
            movie_id:payload.movie_id,
            genre_id:payload.genre_id
        });
        return { message: 'GenreMovie created successfully', new_genreMovie };
    }

    async updateGenreMovie(id: number, payload: UpdateGenreMovieDto): Promise<{ message: string, updatedGenreMovie: GenreMovie }> {
        await this.genreMovieModel.update(payload, { where: { id } });
        const updatedGenreMovie = await this.genreMovieModel.findOne({ where: { id } });
        return { message: 'GenreMovie updated successfully', updatedGenreMovie };
    }

    async deleteGenreMovie(id: number): Promise<{ message: string }> {
        const genreMovie = await this.genreMovieModel.findByPk(id);
        await genreMovie.destroy();
        return { message: 'GenreMovie deleted successfully' };
    }
}
