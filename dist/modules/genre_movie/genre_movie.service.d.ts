import { GenreMovie } from "./models";
import { CreateGenreMovieDto, UpdateGenreMovieDto } from "./dtos";
export declare class GenreMovieService {
    private genreMovieModel;
    constructor(genreMovieModel: typeof GenreMovie);
    getAllGenreMovies(): Promise<GenreMovie[]>;
    getSingleGenreMovie(id: number): Promise<GenreMovie>;
    createGenreMovie(payload: CreateGenreMovieDto): Promise<{
        message: string;
        new_genreMovie: GenreMovie;
    }>;
    updateGenreMovie(id: number, payload: UpdateGenreMovieDto): Promise<{
        message: string;
        updatedGenreMovie: GenreMovie;
    }>;
    deleteGenreMovie(id: number): Promise<{
        message: string;
    }>;
}
