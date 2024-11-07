import { Model } from 'sequelize-typescript';
import { User } from 'src/modules/user';
export declare class Wallet extends Model {
    user_id: number;
    amount: number;
    is_premium: boolean;
    user: User;
}
