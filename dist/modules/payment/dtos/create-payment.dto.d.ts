import { CreatePaymentRequest } from '../interfaces';
export declare class CreatePaymentDto implements CreatePaymentRequest {
    order_id: number;
    amount: number;
    status: string;
}
