import {  IsString, IsNumber } from 'class-validator';
import { CreateSubscriptionRequest } from '../interfaces';

export class UpdateSubscriptionDto implements CreateSubscriptionRequest {
    @IsString()
    type: string;

    @IsNumber()
    price: number;
}
