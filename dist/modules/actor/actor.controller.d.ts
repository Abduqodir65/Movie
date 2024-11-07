import { ActorService } from './actor.service';
import { Actor } from './models/actor.model';
import { CreateActorDto, UpdateActorDto } from './dtos';
export declare class ActorController {
    private readonly actorService;
    constructor(actorService: ActorService);
    getAllActors(): Promise<Actor[]>;
    getSingleActor(id: string): Promise<Actor>;
    createActor(createActorPayload: CreateActorDto, image: Express.Multer.File): Promise<{
        message: string;
        new_actor: CreateActorDto;
    }>;
    updateActor(id: string, updateActorPayload: UpdateActorDto): Promise<{
        message: string;
        updatedActor: UpdateActorDto;
    }>;
    deleteActor(id: string): Promise<{
        message: string;
    }>;
}
