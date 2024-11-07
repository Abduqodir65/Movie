import { LikesService } from "./like.service";
import { Likes } from "./models";
import { CreateLikeDto, UpdateLikeDto } from "./dtos";
export declare class LikesController {
    private readonly likesService;
    constructor(likesService: LikesService);
    getAllLikes(): Promise<Likes[]>;
    getSingleLike(id: string): Promise<Likes>;
    createLike(createLikePayload: CreateLikeDto): Promise<{
        message: string;
        new_like: Likes;
    }>;
    updateLike(id: string, updateLikePayload: UpdateLikeDto): Promise<{
        message: string;
        updatedLike: Likes;
    }>;
    deleteLike(id: string): Promise<{
        message: string;
    }>;
}
