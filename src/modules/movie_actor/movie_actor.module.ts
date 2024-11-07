import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { MovieActor } from "./models";
import { MovieActorService } from "./movie_actor.service"; 
import { MovieActorController } from "./movie_actor.controller";

@Module({
    imports: [SequelizeModule.forFeature([MovieActor])],
    providers: [MovieActorService],
    controllers: [MovieActorController]
})
export class MovieActorModule {}
