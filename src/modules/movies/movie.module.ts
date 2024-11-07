import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Movie } from "./models";
import { FileModule } from "../file";
import { MovieService } from "./movie.service";
import { MovieController } from "./movie.controller";

@Module({
    imports: [SequelizeModule.forFeature([Movie]),FileModule],
    providers: [MovieService],
    controllers: [MovieController]
})

export class MovieModule { }