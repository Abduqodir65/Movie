import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: false, tableName: 'subscriptions' })
export class Subscription extends Model {
    @Column({ allowNull: false, type: DataType.STRING })
    type: string;

    @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
    price: number;
}
