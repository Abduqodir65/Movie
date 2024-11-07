import { IsNotEmpty, IsInt, IsNumber } from 'class-validator';
import { CreateWalletRequest } from '../interfaces';

export class CreateWalletDto implements CreateWalletRequest {
    @IsInt()
    @IsNotEmpty()
    user_id: number;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    is_premium: boolean;
}
