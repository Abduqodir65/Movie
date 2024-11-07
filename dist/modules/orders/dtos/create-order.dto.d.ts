import { CreateOrderRequest } from '../interfaces';
export declare class CreateOrderDto implements CreateOrderRequest {
    wallet_id: number;
    subscription_id: number;
    period: string;
}
