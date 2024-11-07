import {  IsInt, IsNumber } from 'class-validator';
import { CreateWalletRequest } from '../interfaces';

export class UpdateWalletDto implements CreateWalletRequest {
    @IsInt()
    user_id: number;

    @IsNumber()
    amount: number;

    is_premium: boolean;
}
