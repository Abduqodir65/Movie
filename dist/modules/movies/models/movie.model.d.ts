import { Model } from 'sequelize-typescript';
import { User } from 'src/modules/user';
export declare class Movie extends Model {
    title: string;
    description: string;
    director: string;
    rating: number;
    language: string;
    duration: number;
    year: number;
    image: string;
    video: string;
    user_id: number;
    user: User;
}
