import { User } from "./models";
import { FileService } from "../file";
import { CreateUserDto } from "./dtos";
import { UpdateUserRequest } from "./interfaces";
export declare class UserService {
    private userModel;
    private readonly fileService;
    constructor(userModel: typeof User, fileService: FileService);
    getAllUsers(): Promise<User[]>;
    getSingleUser(id: number): Promise<User>;
    createUser(payload: CreateUserDto, file: Express.Multer.File): Promise<{
        message: string;
        new_user: User;
    }>;
    updateUser(id: number, payload: UpdateUserRequest): Promise<{
        message: string;
        updatedUser: User;
    }>;
    deleteUser(id: number): Promise<{
        message: string;
    }>;
}
