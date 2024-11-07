import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserDevice } from "./models";
import { CreateUserDeviceDto, UpdateUserDeviceDto } from './dtos';

@Injectable()
export class UserDeviceService {
    constructor(@InjectModel(UserDevice) private userDeviceModel: typeof UserDevice) {}

    async getAllUserDevices(): Promise<UserDevice[]> {
        return await this.userDeviceModel.findAll();
    }

    async getSingleUserDevice(id: number): Promise<UserDevice> {
        return await this.userDeviceModel.findOne({ where: { id } });
    }

    async createUserDevice(payload: CreateUserDeviceDto): Promise<{ message: string; new_userDevice: UserDevice }> {
        const new_userDevice = await this.userDeviceModel.create({
            userId: payload.userId,
            loginTime:payload.loginTime,
            device: payload.device,
        });
        return { message: 'User device created successfully', new_userDevice };
    }

    

    async updateUserDevice(id: number, payload: UpdateUserDeviceDto): Promise<{ message: string, updatedUserDevice: UserDevice }> {
        await this.userDeviceModel.update(payload, { where: { id } });
        const updatedUserDevice = await this.userDeviceModel.findOne({ where: { id } });
        return { message: 'User device updated successfully', updatedUserDevice };
    }

    async deleteUserDevice(id: number): Promise<{ message: string }> {
        const userDevice = await this.userDeviceModel.findByPk(id);
        await userDevice.destroy();
        return { message: 'User device deleted successfully' };
    }
}