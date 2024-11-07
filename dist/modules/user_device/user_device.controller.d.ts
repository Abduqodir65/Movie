import { UserDeviceService } from "./user_device.service";
import { UserDevice } from "./models";
import { CreateUserDeviceDto, UpdateUserDeviceDto } from "./dtos";
export declare class UserDeviceController {
    private readonly userDeviceService;
    constructor(userDeviceService: UserDeviceService);
    getAllUserDevices(): Promise<UserDevice[]>;
    getSingleUserDevice(id: string): Promise<UserDevice>;
    createUserDevice(createUserDevicePayload: CreateUserDeviceDto): Promise<{
        message: string;
        new_userDevice: UserDevice;
    }>;
    updateUserDevice(id: string, updateUserDevicePayload: UpdateUserDeviceDto): Promise<{
        message: string;
        updatedUserDevice: UserDevice;
    }>;
    deleteUserDevice(id: string): Promise<{
        message: string;
    }>;
}
