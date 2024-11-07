import { Genre } from "./models";
import { CreateGenreDto, UpdateGenreDto } from "./dtos";
export declare class GenreService {
    private genreModel;
    constructor(genreModel: typeof Genre);
    getAllGenres(): Promise<Genre[]>;
    getSingleGenre(id: number): Promise<Genre>;
    createGenre(payload: CreateGenreDto): Promise<{
        message: string;
        new_genre: Genre;
    }>;
    updateGenre(id: number, payload: UpdateGenreDto): Promise<{
        message: string;
        updatedGenre: Genre;
    }>;
    deleteGenre(id: number): Promise<{
        message: string;
    }>;
}
