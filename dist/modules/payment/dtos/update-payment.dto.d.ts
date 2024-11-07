import { CreatePaymentRequest } from '../interfaces';
export declare class UpdatePaymentDto implements CreatePaymentRequest {
    order_id: number;
    amount: number;
    status: string;
}
