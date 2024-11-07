import { Wallet } from "./models";
import { CreateWalletDto, UpdateWalletDto } from './dtos';
export declare class WalletService {
    private walletModel;
    constructor(walletModel: typeof Wallet);
    getAllWallets(): Promise<Wallet[]>;
    getSingleWallet(id: number): Promise<Wallet>;
    createWallet(payload: CreateWalletDto): Promise<{
        message: string;
        new_wallet: Wallet;
    }>;
    updateWallet(id: number, payload: UpdateWalletDto): Promise<{
        message: string;
        updatedWallet: Wallet;
    }>;
    deleteWallet(id: number): Promise<{
        message: string;
    }>;
}
