import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { GenreMovie } from "./models";
import { GenreMovieService } from "./genre_movie.service";
import { GenreMovieController } from "./genre_movie.controller";

@Module({
    imports: [SequelizeModule.forFeature([GenreMovie])],
    providers: [GenreMovieService],
    controllers: [GenreMovieController]
})
export class GenreMovieModule {}
