import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Subscription } from 'src/modules/subscriptions/models';
import { Wallet } from 'src/modules/wallet'; 

@Table({ timestamps: true, tableName: 'orders' })
export class Order extends Model {
    @ForeignKey(() => Wallet)
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    })
    wallet_id: number;

    @ForeignKey(() => Subscription)
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    })
    subscription_id: number;

    @Column({ allowNull: false, type: DataType.STRING })
    period: string;

    @BelongsTo(() => Wallet)
    wallet: Wallet;

    @BelongsTo(() => Subscription)
    subscription: Subscription;
}
