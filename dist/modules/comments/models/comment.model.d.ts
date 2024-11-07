import { Model } from 'sequelize-typescript';
import { User } from 'src/modules/user';
import { Movie } from 'src/modules/movies';
export declare class Comments extends Model<Comments> {
    text: string;
    user_id: number;
    movie_id: number;
    user: User;
    movie: Movie;
}
