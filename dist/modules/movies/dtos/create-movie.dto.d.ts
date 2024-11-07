import { CreateMovieRequest } from '../interfaces';
export declare class CreateMovieDto implements Omit<CreateMovieRequest, 'image'> {
    title: string;
    description: string;
    director: string;
    rating: number;
    language: string;
    duration: number;
    year: number;
    image: any;
    video: any;
    user_id: number;
}
