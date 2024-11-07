import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Comments } from "./models";
import { CommentsService } from "./comment.service";
import { CommentsController } from "./comment.controller"; 

@Module({
    imports: [SequelizeModule.forFeature([Comments])],
    providers: [CommentsService],
    controllers: [CommentsController]
})
export class CommentsModule { }
