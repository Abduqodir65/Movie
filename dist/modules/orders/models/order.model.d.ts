import { Model } from 'sequelize-typescript';
import { Subscription } from 'src/modules/subscriptions/models';
import { Wallet } from 'src/modules/wallet';
export declare class Order extends Model {
    wallet_id: number;
    subscription_id: number;
    period: string;
    wallet: Wallet;
    subscription: Subscription;
}
