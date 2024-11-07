import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Likes } from "./models";
import { LikesService } from "./like.service"; 
import { LikesController } from "./like.controller"; 

@Module({
    imports: [SequelizeModule.forFeature([Likes])],
    providers: [LikesService],
    controllers: [LikesController]
})
export class LikesModule { }
