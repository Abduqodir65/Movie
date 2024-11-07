import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User, UserRoles } from "./models";
import { FileService } from "../file";
import { CreateUserDto } from "./dtos";
import { UpdateUserRequest } from "./interfaces";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User) private userModel: typeof User,
        private readonly fileService: FileService,
    ) { }

    async getAllUsers(): Promise<User[]> {
        return await this.userModel.findAll();
    }

    async getSingleUser(id: number): Promise<User> {
        return await this.userModel.findOne({
            where: { id }
        })
    }

    async createUser(
        payload: CreateUserDto,
        file: Express.Multer.File
    ): Promise<{ message: string; new_user: User }> {
        const image = await this.fileService.uploadFile(file)

        const new_user = await this.userModel.create({
            username: payload.username,
            email: payload.email,
            password: payload.password,
            is_premium: payload.is_premium,
            role: payload?.role ? payload.role : UserRoles.user,
            image
        })



        return { message: 'User created successfully', new_user }
    }

    async updateUser(
        id: number,
        payload: UpdateUserRequest
    ): Promise<{ message: string, updatedUser: User }> {
        await this.userModel.update(payload, {
            where: { id }
        })

        const updatedUser = await this.userModel.findOne({ where: { id } })

        return { message: 'User updated successfully', updatedUser }
    }

    async deleteUser(id: number): Promise<{ message: string }> {
        const foundedUser = await this.userModel.findByPk(id)

        await this.fileService.deleteFile(foundedUser.image)
        foundedUser.destroy()

        return {
            message: 'User deleted successfully'
        }
    }
}