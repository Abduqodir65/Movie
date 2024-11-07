import {  IsString, IsNumberString } from 'class-validator';
import { CreateActorRequest } from '../interfaces';

export class UpdateActorDto implements Omit<CreateActorRequest, 'image'> {
    @IsString()
    name: string;

    @IsNumberString()
    movie_id: number;

    image: any;
}
