import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Genre } from "./models";
import { GenreService } from "./genre.service";
import { GenreController } from "./genre.controller";

@Module({
    imports: [SequelizeModule.forFeature([Genre])],
    providers: [GenreService],
    controllers: [GenreController]

})

export class GenreModule { }