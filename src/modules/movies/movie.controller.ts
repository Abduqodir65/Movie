import { Controller, Get, Query, Param, Body, Post, Put, Delete, UploadedFile, UseInterceptors, UploadedFiles } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { Movie } from "./models";
import { CreateMovieDto, UpdateMovieDto } from "./dtos";
import { FileFieldsInterceptor, FileInterceptor } from "@nestjs/platform-express";
import { Express } from 'express';

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) { }

    // Barcha filmlarni olish, filter, pagination va sorting bilan
    // @Get()
    // async getAllMovies(
    //     @Query('page') page: string,
    //     @Query('limit') limit: string,
    //     @Query('sort') sort: string,
    //     @Query('filters') filters: any
    // ): Promise<Movie[]> {
    //     return this.movieService.getAllMovies({
    //         page: Number(page) || 1, 
    //         limit: Number(limit) || 10, 
    //         sort,
    //         filters
    //     });
    // }

    @Get()
    async getAllMovies():Promise<Movie[]> {
        return await this.movieService.getAllMovies()
    }


    // @Get('trending')
    // async getTrendingMovies(): Promise<Movie[]> {
    //     return this.movieService.getTrendingMovies();
    // }

    // // Yangi qo'shilgan filmlarni olish
    // @Get('latest')
    // async getLatestMovies(): Promise<Movie[]> {
    //     return this.movieService.getLatestMovies();
    // }

    // // Eng ko‘p sharh olgan filmlarni olish
    // @Get('most-reviewed')
    // async getMostReviewedMovies(): Promise<Movie[]> {
    //     return this.movieService.getMostReviewedMovies();
    // }

    // @Get('search')
    // async searchMovies(
    //     @Query('term') searchTerm: string
    // ): Promise<Movie[]> {
    //     return this.movieService.searchMovies(searchTerm);
    // }

    @Get(':id')
    async getSingleMovie(@Param('id') id: number): Promise<Movie> {
        return this.movieService.getSingleMovie(id);
    }

    // Yangi film yaratish
    @Post('/add')
    @UseInterceptors(
        FileFieldsInterceptor([{ name: "image", maxCount: 1 }, { name: "video", maxCount: 1 }])
    )
    async createMovie(
        @Body() payload: CreateMovieDto,
        @UploadedFiles() files: { image: Express.Multer.File[], video: Express.Multer.File[] }
    ): Promise<{ message: string; new_movie: Movie }> {
        return this.movieService.createMovie(payload, files.image[0], files.video[0]);
    }

    @Put(':id')
    async updateMovie(
        @Param('id') id: number,
        @Body() payload: UpdateMovieDto
    ): Promise<{ message: string; updatedMovie: Movie }> {
        return this.movieService.updateMovie(id, payload);
    }

    @Delete(':id')
    async deleteMovie(@Param('id') id: number): Promise<{ message: string }> {
        return this.movieService.deleteMovie(id);
    }
}
