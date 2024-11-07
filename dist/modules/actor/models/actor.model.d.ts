import { Model } from 'sequelize-typescript';
import { Movie } from 'src/modules/movies';
export declare class Actor extends Model {
    name: string;
    image: string;
    movie_id: number;
    movie: Movie;
}
