import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from '../user';
import { UserDevice } from '../user_device';
import { MailerModule } from '../mailer/mailer.module'; 
import { OtpModule } from '../OTP/otp.module'; 

@Module({
    imports: [
        SequelizeModule.forFeature([User, UserDevice]), 
        MailerModule, 
        OtpModule,    
        ConfigModule,  
    ],
    providers: [AuthService], 
    controllers: [AuthController],
    exports: [AuthService], 
})
export class AuthModule { }
