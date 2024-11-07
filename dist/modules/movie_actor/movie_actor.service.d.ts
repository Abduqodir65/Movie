import { MovieActor } from "./models";
import { CreateMovieActorDto, UpdateMovieActorDto } from "./dtos";
export declare class MovieActorService {
    private movieActorModel;
    constructor(movieActorModel: typeof MovieActor);
    getAllMovieActors(): Promise<MovieActor[]>;
    getSingleMovieActor(id: number): Promise<MovieActor>;
    createMovieActor(payload: CreateMovieActorDto): Promise<{
        message: string;
        new_movieActor: MovieActor;
    }>;
    updateMovieActor(id: number, payload: UpdateMovieActorDto): Promise<{
        message: string;
        updatedMovieActor: MovieActor;
    }>;
    deleteMovieActor(id: number): Promise<{
        message: string;
    }>;
}
