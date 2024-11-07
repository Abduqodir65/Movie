import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { GenreService } from "./genre.service";
import { Genre } from "./models";
import { CreateGenreDto, UpdateGenreDto } from "./dtos";

@Controller('genres')
export class GenreController {
    #_service: GenreService;

    constructor(service: GenreService) {
        this.#_service = service
    }

    @Get()
    async getAllGenres():Promise<Genre[]> {
        return await this.#_service.getAllGenres()
    }

    @Get('/:id')
    async getSingleGenre(id:string):Promise<Genre> {
        return await this.#_service.getSingleGenre(+id)
    }

    @Post('/add')
    async createGenre(@Body() createGenrePayload: CreateGenreDto,):Promise<{message:string,new_genre:CreateGenreDto}> {
        await this.#_service.createGenre(createGenrePayload)

        return {
            message: 'Genre created successfully', new_genre: createGenrePayload
        }
    }

    @Patch('/update/:id')
    async updateGenre(@Param('id') id: string,
    @Body() updateGenrePayload: UpdateGenreDto):Promise<{message:string,updatedGenre:UpdateGenreDto}> {
        await this.#_service.updateGenre(+id,updateGenrePayload)

        return {
            message: 'User updated successfully',
            updatedGenre: updateGenrePayload
        }
    }

    @Delete('delete/:id')
    async deleteGenre(@Param('id') id:string):Promise<{message:string}> {
        await this.#_service.deleteGenre(+id)

        return {
            message:'Genre deleted successfully'
        }
    }
}