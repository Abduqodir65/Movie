import { CreateWalletRequest } from '../interfaces';
export declare class UpdateWalletDto implements CreateWalletRequest {
    user_id: number;
    amount: number;
    is_premium: boolean;
}
