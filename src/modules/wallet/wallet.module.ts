import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Wallet } from "./models";
import { WalletService } from "./wallet.service";
import { WalletController } from "./wallet.controller";

@Module({
    imports: [SequelizeModule.forFeature([Wallet])],
    providers: [WalletService],
    controllers: [WalletController]
})
export class WalletModule { }
