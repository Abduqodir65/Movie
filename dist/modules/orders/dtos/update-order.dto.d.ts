import { CreateOrderRequest } from '../interfaces';
export declare class UpdateOrderDto implements CreateOrderRequest {
    wallet_id: number;
    subscription_id: number;
    period: string;
}
