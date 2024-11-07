import { GenreService } from "./genre.service";
import { Genre } from "./models";
import { CreateGenreDto, UpdateGenreDto } from "./dtos";
export declare class GenreController {
    #private;
    constructor(service: GenreService);
    getAllGenres(): Promise<Genre[]>;
    getSingleGenre(id: string): Promise<Genre>;
    createGenre(createGenrePayload: CreateGenreDto): Promise<{
        message: string;
        new_genre: CreateGenreDto;
    }>;
    updateGenre(id: string, updateGenrePayload: UpdateGenreDto): Promise<{
        message: string;
        updatedGenre: UpdateGenreDto;
    }>;
    deleteGenre(id: string): Promise<{
        message: string;
    }>;
}
