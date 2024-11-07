import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { MovieActorService } from "./movie_actor.service";
import { MovieActor } from "./models";

@Controller('movie-actors')
export class MovieActorController {
    constructor(private readonly movieActorService: MovieActorService) {}

    @Get()
    async getAllMovieActors(): Promise<MovieActor[]> {
        return await this.movieActorService.getAllMovieActors();
    }

    @Get("/:id")
    async getSingleMovieActor(@Param('id') id: string): Promise<MovieActor> {
        return await this.movieActorService.getSingleMovieActor(+id);
    }

    @Post('/add')
    async createMovieActor(@Body() payload: any): Promise<{ message: string; new_movieActor: MovieActor }> {
        return await this.movieActorService.createMovieActor(payload);
    }

    @Patch('update/:id')
    async updateMovieActor(@Param('id') id: string, @Body() payload: any): Promise<{ message: string, updatedMovieActor: MovieActor }> {
        return await this.movieActorService.updateMovieActor(+id, payload);
    }

    @Delete('/delete/:id')
    async deleteMovieActor(@Param('id') id: string): Promise<{ message: string }> {
        return await this.movieActorService.deleteMovieActor(+id);
    }
}
