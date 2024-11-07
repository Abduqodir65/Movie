import { IsNotEmpty, IsString, IsInt, IsNumber, IsNumberString } from 'class-validator';
import { CreateGenreRequest } from '../interfaces';


export class CreateGenreDto implements CreateGenreRequest { 
    @IsString()
    @IsNotEmpty()
    name:string;

}
