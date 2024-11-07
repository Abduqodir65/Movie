import { UserService } from "./user.service";
import { User } from "./models";
import { CreateUserDto, UpdateUserDto } from "./dtos";
export declare class UserController {
    #private;
    constructor(service: UserService);
    getAllUsers(): Promise<User[]>;
    getSingleUser(id: string): Promise<User>;
    createUser(createUserPayload: CreateUserDto, image: Express.Multer.File): Promise<{
        message: string;
        new_user: CreateUserDto;
    }>;
    updateUser(id: string, updateUserPayload: UpdateUserDto): Promise<{
        message: string;
        updatedUser: UpdateUserDto;
    }>;
    delteUser(id: string): Promise<{
        message: string;
    }>;
}
