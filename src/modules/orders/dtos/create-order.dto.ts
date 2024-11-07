import { IsNotEmpty, IsNumber, IsString, IsIn } from 'class-validator';
import { CreateOrderRequest } from '../interfaces';

export class CreateOrderDto implements CreateOrderRequest {
    @IsNumber()
    @IsNotEmpty()
    wallet_id: number;

    @IsNumber()
    @IsNotEmpty()
    subscription_id: number;

    @IsString()
    @IsNotEmpty()
    @IsIn(['monthly', 'yearly']) 
    period: string;
}
