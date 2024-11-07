import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { User } from "./models";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreateUserDto, UpdateUserDto } from "./dtos";

ApiTags('Users')
@Controller('users')
export class UserController {
    #_service: UserService;

    constructor(service: UserService) {
        this.#_service = service
    }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return await this.#_service.getAllUsers();
    }

    @Get("/:id")
    async getSingleUser(@Param('id') id: string): Promise<User> {
        return await this.#_service.getSingleUser(+id)
    }

    @Post('/add')
    @UseInterceptors(FileInterceptor('image'))
    async createUser(
        @Body() createUserPayload: CreateUserDto,
        @UploadedFile() image: Express.Multer.File
    ): Promise<{ message: string, new_user: CreateUserDto }> {
        await this.#_service.createUser(createUserPayload, image)

        return {
            message: 'User created successfully',
            new_user: createUserPayload
        }
    }

    @Patch('update/:id')
    async updateUser(
        @Param('id') id: string,
        @Body() updateUserPayload: UpdateUserDto
    ): Promise<{ message: string, updatedUser: UpdateUserDto }> {
        await this.#_service.updateUser(+id, updateUserPayload)

        return {
            message: 'User updated successfully',
            updatedUser: updateUserPayload
        }
    }

    @Delete('/delete/:id')
    async delteUser(@Param('id') id: string): Promise<{ message: string }> {
        return this.#_service.deleteUser(+id);      
    }



}