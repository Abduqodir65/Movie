import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Wallet } from "./models";
import { CreateWalletDto, UpdateWalletDto } from './dtos';

@Injectable()
export class WalletService {
    constructor(@InjectModel(Wallet) private walletModel: typeof Wallet) {}

    async getAllWallets(): Promise<Wallet[]> {
        return await this.walletModel.findAll();
    }

    async getSingleWallet(id: number): Promise<Wallet> {
        return await this.walletModel.findOne({ where: { id } });
    }

    async createWallet(payload: CreateWalletDto): Promise<{ message: string; new_wallet: Wallet }> {
        const new_wallet = await this.walletModel.create({
            user_id:payload.user_id,
            amount: payload.amount,
            is_premium: payload.is_premium
        });
        return { message: 'Wallet created successfully', new_wallet };
    }

    async updateWallet(id: number, payload: UpdateWalletDto): Promise<{ message: string, updatedWallet: Wallet }> {
        await this.walletModel.update(payload, { where: { id } });
        const updatedWallet = await this.walletModel.findOne({ where: { id } });
        return { message: 'Wallet updated successfully', updatedWallet };
    }

    async deleteWallet(id: number): Promise<{ message: string }> {
        const wallet = await this.walletModel.findByPk(id);
        await wallet.destroy();
        return { message: 'Wallet deleted successfully' };
    }
}
