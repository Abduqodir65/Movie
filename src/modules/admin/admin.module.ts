import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Admin } from "./models";
import { AdminService } from "./admin.service";
import { AdminController } from "./admine.controller";

@Module({
    imports: [SequelizeModule.forFeature([Admin])],
    providers: [AdminService],
    controllers: [AdminController]

})

export class AdminModule { }