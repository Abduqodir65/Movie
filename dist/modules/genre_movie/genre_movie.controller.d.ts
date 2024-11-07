import { GenreMovieService } from "./genre_movie.service";
import { GenreMovie } from "./models";
export declare class GenreMovieController {
    private readonly genreMovieService;
    constructor(genreMovieService: GenreMovieService);
    getAllGenreMovies(): Promise<GenreMovie[]>;
    getSingleGenreMovie(id: string): Promise<GenreMovie>;
    createGenreMovie(payload: any): Promise<{
        message: string;
        new_genreMovie: GenreMovie;
    }>;
    updateGenreMovie(id: string, payload: any): Promise<{
        message: string;
        updatedGenreMovie: GenreMovie;
    }>;
    deleteGenreMovie(id: string): Promise<{
        message: string;
    }>;
}
