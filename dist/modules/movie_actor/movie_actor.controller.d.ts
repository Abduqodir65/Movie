import { MovieActorService } from "./movie_actor.service";
import { MovieActor } from "./models";
export declare class MovieActorController {
    private readonly movieActorService;
    constructor(movieActorService: MovieActorService);
    getAllMovieActors(): Promise<MovieActor[]>;
    getSingleMovieActor(id: string): Promise<MovieActor>;
    createMovieActor(payload: any): Promise<{
        message: string;
        new_movieActor: MovieActor;
    }>;
    updateMovieActor(id: string, payload: any): Promise<{
        message: string;
        updatedMovieActor: MovieActor;
    }>;
    deleteMovieActor(id: string): Promise<{
        message: string;
    }>;
}
