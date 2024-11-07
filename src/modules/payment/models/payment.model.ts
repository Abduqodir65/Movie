import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Order } from 'src/modules/orders/models'; 

@Table({ timestamps: true, tableName: 'payments' })
export class Payment extends Model {
    @ForeignKey(() => Order)
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    })
    order_id: number;

    @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
    amount: number;

    @Column({ allowNull: false, type: DataType.STRING })
    status: string;

    @BelongsTo(() => Order)
    order: Order;
}
