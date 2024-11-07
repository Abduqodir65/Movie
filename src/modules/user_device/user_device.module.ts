import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserDevice } from './models/user_device.model'; 
import { UserDeviceService } from './user_device.service';
import { UserDeviceController } from './user_device.controller';

@Module({
    imports: [SequelizeModule.forFeature([UserDevice])], 
    providers: [UserDeviceService],
    controllers: [UserDeviceController],
})
export class UserDeviceModule {}
