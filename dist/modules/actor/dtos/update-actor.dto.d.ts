import { CreateActorRequest } from '../interfaces';
export declare class UpdateActorDto implements Omit<CreateActorRequest, 'image'> {
    name: string;
    movie_id: number;
    image: any;
}
