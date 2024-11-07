import { Body, Injectable } from "@nestjs/common";
import { Genre } from "./models";
import { InjectModel } from "@nestjs/sequelize";
import { CreateGenreDto, UpdateGenreDto } from "./dtos";

@Injectable()
export class GenreService {
    constructor(@InjectModel(Genre) private genreModel: typeof Genre,
    ) { }

    async getAllGenres():Promise<Genre[]> {
        return await this.genreModel.findAll()
    }

    async getSingleGenre(id:number):Promise<Genre> {
        return await this.genreModel.findOne({
            where: {id}
        })
    }

    async createGenre(payload:CreateGenreDto):Promise<{message: string,new_genre:Genre}> {
        const new_genre = await this.genreModel.create({
            name: payload.name,
        })

        return {
            message: 'Movie created successfully',new_genre
        }
    }

    async updateGenre(id:number,payload: UpdateGenreDto):Promise<{message:string,updatedGenre: Genre}> {
        await this.genreModel.update(payload,{
            where: {id}
        })

        const updatedGenre = await this.genreModel.findOne({where: {id}})

        return {
            message: 'Genre updated successfully',
            updatedGenre
        }
    }

    async deleteGenre(id:number):Promise<{message:string}> {
        const foundedGenre = await this.genreModel.findByPk(id)
        foundedGenre.destroy()

        return {
            message: "Genre deleted successfully"
        }
    }
}