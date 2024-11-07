import { IsNotEmpty, IsString, IsNumberString } from 'class-validator';
import { CreateActorRequest } from '../interfaces';

export class CreateActorDto implements Omit<CreateActorRequest, 'image'> {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumberString()
    @IsNotEmpty()
    movie_id: number;

    image: any;
}
