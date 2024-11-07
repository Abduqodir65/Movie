import { Model } from 'sequelize-typescript';
import { Order } from 'src/modules/orders/models';
export declare class Payment extends Model {
    order_id: number;
    amount: number;
    status: string;
    order: Order;
}
