import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { WalletService } from "./wallet.service";
import { Wallet } from "./models";
import { CreateWalletDto, UpdateWalletDto } from "./dtos";

@ApiTags('Wallets')
@Controller('wallets')
export class WalletController {
    constructor(private readonly walletService: WalletService) {}

    @Get()
    async getAllWallets(): Promise<Wallet[]> {
        return await this.walletService.getAllWallets();
    }

    @Get("/:id")
    async getSingleWallet(@Param('id') id: string): Promise<Wallet> {
        return await this.walletService.getSingleWallet(+id);
    }

    @Post('/add')
    async createWallet(@Body() createWalletPayload: CreateWalletDto): Promise<{ message: string, new_wallet: Wallet }> {
        return await this.walletService.createWallet(createWalletPayload);
    }

    @Patch('update/:id')
    async updateWallet(
        @Param('id') id: string,
        @Body() updateWalletPayload: UpdateWalletDto
    ): Promise<{ message: string, updatedWallet: Wallet }> {
        return await this.walletService.updateWallet(+id, updateWalletPayload);
    }

    @Delete('/delete/:id')
    async deleteWallet(@Param('id') id: string): Promise<{ message: string }> {
        return await this.walletService.deleteWallet(+id);
    }
}
