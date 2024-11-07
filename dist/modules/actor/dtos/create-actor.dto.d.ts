import { CreateActorRequest } from '../interfaces';
export declare class CreateActorDto implements Omit<CreateActorRequest, 'image'> {
    name: string;
    movie_id: number;
    image: any;
}
