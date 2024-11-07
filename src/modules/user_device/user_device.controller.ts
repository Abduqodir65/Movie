import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserDeviceService } from "./user_device.service"; 
import { UserDevice } from "./models";
import { CreateUserDeviceDto, UpdateUserDeviceDto } from "./dtos";

@ApiTags('User Devices')
@Controller('user-devices')
export class UserDeviceController {
    constructor(private readonly userDeviceService: UserDeviceService) {}

    @Get()
    async getAllUserDevices(): Promise<UserDevice[]> {
        return await this.userDeviceService.getAllUserDevices();
    }

    @Get("/:id")
    async getSingleUserDevice(@Param('id') id: string): Promise<UserDevice> {
        return await this.userDeviceService.getSingleUserDevice(+id);
    }

    @Post('/add')
    async createUserDevice(@Body() createUserDevicePayload: CreateUserDeviceDto): Promise<{ message: string, new_userDevice: UserDevice }> {
        return await this.userDeviceService.createUserDevice(createUserDevicePayload);
    }

    @Patch('update/:id')
    async updateUserDevice(
        @Param('id') id: string,
        @Body() updateUserDevicePayload: UpdateUserDeviceDto
    ): Promise<{ message: string, updatedUserDevice: UserDevice }> {
        return await this.userDeviceService.updateUserDevice(+id, updateUserDevicePayload);
    }

    @Delete('/delete/:id')
    async deleteUserDevice(@Param('id') id: string): Promise<{ message: string }> {
        return await this.userDeviceService.deleteUserDevice(+id);
    }
}
