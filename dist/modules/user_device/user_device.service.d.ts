import { UserDevice } from "./models";
import { CreateUserDeviceDto, UpdateUserDeviceDto } from './dtos';
export declare class UserDeviceService {
    private userDeviceModel;
    constructor(userDeviceModel: typeof UserDevice);
    getAllUserDevices(): Promise<UserDevice[]>;
    getSingleUserDevice(id: number): Promise<UserDevice>;
    createUserDevice(payload: CreateUserDeviceDto): Promise<{
        message: string;
        new_userDevice: UserDevice;
    }>;
    updateUserDevice(id: number, payload: UpdateUserDeviceDto): Promise<{
        message: string;
        updatedUserDevice: UserDevice;
    }>;
    deleteUserDevice(id: number): Promise<{
        message: string;
    }>;
}
