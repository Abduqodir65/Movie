import {  IsNumber, IsString } from 'class-validator';
import { CreatePaymentRequest } from '../interfaces'; 

export class UpdatePaymentDto implements CreatePaymentRequest {
    @IsNumber()
    order_id: number;

    @IsNumber()
    amount: number;

    @IsString()
    status: string; 
}
