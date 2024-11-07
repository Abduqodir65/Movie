import { Model } from 'sequelize-typescript';
import { User } from 'src/modules/user';
import { Movie } from 'src/modules/movies';
export declare class WatchedVideos extends Model {
    user_id: number;
    movie_id: number;
    user: User;
    movie: Movie;
}
