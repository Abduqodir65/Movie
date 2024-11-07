import {  IsString,IsNumberString } from 'class-validator';
import { CreateGenreRequest } from '../interfaces';


export class UpdateGenreDto implements CreateGenreRequest {
    @IsString()
    name:string;
}
