import { Likes } from "./models";
import { CreateLikeDto, UpdateLikeDto } from './dtos';
export declare class LikesService {
    private likesModel;
    constructor(likesModel: typeof Likes);
    getAllLikes(): Promise<Likes[]>;
    getSingleLike(id: number): Promise<Likes>;
    createLike(payload: CreateLikeDto): Promise<{
        message: string;
        new_like: Likes;
    }>;
    updateLike(id: number, payload: UpdateLikeDto): Promise<{
        message: string;
        updatedLike: Likes;
    }>;
    deleteLike(id: number): Promise<{
        message: string;
    }>;
}
