import { Movie } from "./models";
import { FileService } from "../file";
import { CreateMovieDto, UpdateMovieDto } from "./dtos";
import { Sequelize } from "sequelize-typescript";
export declare class MovieService {
    private movieModel;
    private readonly fileService;
    private readonly sequelize;
    constructor(movieModel: typeof Movie, fileService: FileService, sequelize: Sequelize);
    getAllMovies(): Promise<Movie[]>;
    getSingleMovie(id: number): Promise<Movie>;
    createMovie(payload: CreateMovieDto, imageFile: Express.Multer.File, videoFile: Express.Multer.File): Promise<{
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
