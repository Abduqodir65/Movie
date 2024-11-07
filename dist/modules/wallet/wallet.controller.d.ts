import { WalletService } from "./wallet.service";
import { Wallet } from "./models";
import { CreateWalletDto, UpdateWalletDto } from "./dtos";
export declare class WalletController {
    private readonly walletService;
    constructor(walletService: WalletService);
    getAllWallets(): Promise<Wallet[]>;
    getSingleWallet(id: string): Promise<Wallet>;
    createWallet(createWalletPayload: CreateWalletDto): Promise<{
        message: string;
        new_wallet: Wallet;
    }>;
    updateWallet(id: string, updateWalletPayload: UpdateWalletDto): Promise<{
        message: string;
        updatedWallet: Wallet;
    }>;
    deleteWallet(id: string): Promise<{
        message: string;
    }>;
}
