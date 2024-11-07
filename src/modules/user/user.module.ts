import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./models";
import { FileModule } from "../file";

@Module({
    imports: [SequelizeModule.forFeature([User]), FileModule],
    providers: [UserService],
    controllers: [UserController]
})

export class UserModule { }