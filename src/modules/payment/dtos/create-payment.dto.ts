import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreatePaymentRequest } from '../interfaces'; 

export class CreatePaymentDto implements CreatePaymentRequest {
    @IsNumber()
    @IsNotEmpty()
    order_id: number;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsString()
    @IsNotEmpty()
    status: string; 
}
