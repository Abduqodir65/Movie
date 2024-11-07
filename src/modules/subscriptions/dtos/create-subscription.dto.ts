import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { CreateSubscriptionRequest } from '../interfaces';

export class CreateSubscriptionDto implements CreateSubscriptionRequest {
    @IsString()
    @IsNotEmpty()
    type: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;
}
