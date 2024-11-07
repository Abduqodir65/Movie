import { MovieService } from "./movie.service";
import { Movie } from "./models";
import { CreateMovieDto, UpdateMovieDto } from "./dtos";
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    getAllMovies(page: string, limit: string, sort: string, filters: any): Promise<Movie[]>;
    getTrendingMovies(): Promise<Movie[]>;
    getLatestMovies(): Promise<Movie[]>;
    getMostReviewedMovies(): Promise<Movie[]>;
    searchMovies(searchTerm: string): Promise<Movie[]>;
    getSingleMovie(id: number): Promise<Movie>;
    createMovie(payload: CreateMovieDto, files: {
        image: Express.Multer.File[];
        video: Express.Multer.File[];
    }): Promise<{
        message: string;
        new_movie: Movie;
    }>;
    updateMovie(id: number, payload: UpdateMovieDto): Promise<{
        message: string;
        updatedMovie: Movie;
    }>;
    deleteMovie(id: number): Promise<{
        message: string;
    }>;
}
