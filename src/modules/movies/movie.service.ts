import { Injectable } from "@nestjs/common";
import { Movie } from "./models";
import { InjectModel } from "@nestjs/sequelize";
import { FileService } from "../file";
import { CreateMovieDto, UpdateMovieDto } from "./dtos";
import { ApiFeature } from "src/utils"; 
import { Sequelize } from "sequelize-typescript"; 

@Injectable()
export class MovieService {
    constructor(
        @InjectModel(Movie) private movieModel: typeof Movie,
        private readonly fileService: FileService,
        private readonly sequelize: Sequelize
    ) {}

    // async getAllMovies(filters: any): Promise<Movie[]> {
    //     const apiFeature = new ApiFeature('movies')
    //         .paginate(filters.page, filters.limit)
    //         .sort(filters.sort)
    //         .filter(filters);
    
    //     const query = apiFeature.getQuery();
    
    //     const movies = await this.sequelize.query(query.queryString, {
    //         model: Movie,
    //         mapToModel: true,
    //         replacements: query.filters, 
    //     });

    //     console.log(movies)
    
    //     return movies;
    // }

    async getAllMovies():Promise<Movie[]> {
        return await this.movieModel.findAll()
    }

    // async getTrendingMovies(): Promise<Movie[]> {
    //     const apiFeature = new ApiFeature('movies').trending();
    //     const query = apiFeature.getQuery();
        
    //     const movies = await this.sequelize.query(query.queryString, {
    //         model: Movie,
    //         mapToModel: true,
    //     });
        
    //     return movies;
    // }

    // async getLatestMovies(): Promise<Movie[]> {
    //     const apiFeature = new ApiFeature('movies').latest();
    //     const query = apiFeature.getQuery();

    //     const movies = await this.sequelize.query(query.queryString, {
    //         model: Movie,
    //         mapToModel: true,     
    //     });

    //     return movies;
    // }

    // async getMostReviewedMovies(): Promise<Movie[]> {
    //     const apiFeature = new ApiFeature('movies').mostReviewed();
    //     const query = apiFeature.getQuery();

    //     const movies = await this.sequelize.query(query.queryString, {
    //         model: Movie,
    //         mapToModel: true,
    //     });

    //     return movies;
    // }

    // async searchMovies(searchTerm: string): Promise<Movie[]> {
    //     const apiFeature = new ApiFeature('movies').smartSearch(searchTerm);
    //     const query = apiFeature.getQuery();

    //     const movies = await this.sequelize.query(query.queryString, {
    //         model: Movie,
    //         mapToModel: true,
    //     });

    //     return movies;
    // }

    async getSingleMovie(id:number):Promise<Movie> {
        return await this.movieModel.findOne({
            where: {id}
        })
    }

    async createMovie(
        payload: CreateMovieDto,
        imageFile: Express.Multer.File,
        videoFile: Express.Multer.File
    ): Promise<{ message: string; new_movie: Movie }> {
        const image = await this.fileService.uploadFile(imageFile);
        const video = await this.fileService.uploadFile(videoFile);

        const new_movie = await this.movieModel.create({
            title: payload.title,
            description: payload.description,
            director: payload.director,
            rating: payload.rating,
            language: payload.language,
            duration: payload.duration,
            year:payload.year,
            image,
            video,
            user_id: payload.user_id,
        });

        return {
            message: 'Movie created successfully',
            new_movie,
        };
    }

    async updateMovie(id: number, payload: UpdateMovieDto): Promise<{ message: string; updatedMovie: Movie }> {
        await this.movieModel.update(payload, {
            where: { id },
        });

        const updatedMovie = await this.movieModel.findOne({ where: { id } });

        return {
            message: 'Movie updated successfully',
            updatedMovie,
        };
    }

    async deleteMovie(id: number): Promise<{ message: string }> {
        const foundedMovie = await this.movieModel.findByPk(id);

        await this.fileService.deleteFile(foundedMovie.image);
        await this.fileService.deleteFile(foundedMovie.video);
        foundedMovie.destroy();

        return {
            message: "User deleted successfully",
        };
    }
}
