import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { GenreMovieService } from "./genre_movie.service";
import { GenreMovie } from "./models";

@Controller('genre-movies')
export class GenreMovieController {
    constructor(private readonly genreMovieService: GenreMovieService) {}

    @Get()
    async getAllGenreMovies(): Promise<GenreMovie[]> {
        return await this.genreMovieService.getAllGenreMovies();
    }

    @Get("/:id")
    async getSingleGenreMovie(@Param('id') id: string): Promise<GenreMovie> {
        return await this.genreMovieService.getSingleGenreMovie(+id);
    }

    @Post('/add')
    async createGenreMovie(@Body() payload: any): Promise<{ message: string; new_genreMovie: GenreMovie }> {
        return await this.genreMovieService.createGenreMovie(payload);
    }

    @Patch('update/:id')
    async updateGenreMovie(@Param('id') id: string, @Body() payload: any): Promise<{ message: string, updatedGenreMovie: GenreMovie }> {
        return await this.genreMovieService.updateGenreMovie(+id, payload);
    }

    @Delete('/delete/:id')
    async deleteGenreMovie(@Param('id') id: string): Promise<{ message: string }> {
        return await this.genreMovieService.deleteGenreMovie(+id);
    }
}