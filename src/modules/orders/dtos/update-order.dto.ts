import {  IsNumber, IsString, IsIn } from 'class-validator';
import { CreateOrderRequest } from '../interfaces';

export class UpdateOrderDto implements CreateOrderRequest {
    @IsNumber()
    wallet_id: number;

    @IsNumber()
    subscription_id: number;

    @IsString()
    @IsIn(['monthly', 'yearly']) 
    period: string;
}
