import { Actor } from './models/actor.model';
import { FileService } from '../file/file.service';
import { CreateActorDto, UpdateActorDto } from './dtos';
export declare class ActorService {
    private actorModel;
    private readonly fileService;
    constructor(actorModel: typeof Actor, fileService: FileService);
    getAllActors(): Promise<Actor[]>;
    getSingleActor(id: number): Promise<Actor>;
    createActor(payload: CreateActorDto, imageFile: Express.Multer.File): Promise<{
        message: string;
        new_actor: Actor;
    }>;
    updateActor(id: number, payload: UpdateActorDto): Promise<{
        message: string;
        updatedActor: Actor;
    }>;
    deleteActor(id: number): Promise<{
        message: string;
    }>;
}
