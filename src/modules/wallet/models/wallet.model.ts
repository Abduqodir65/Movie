import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    DataType,
} from 'sequelize-typescript';
import { User } from 'src/modules/user'

@Table({ timestamps: true, tableName: 'wallet' })
export class Wallet extends Model {
    @ForeignKey(() => User)
    @Column({
        allowNull:false,
        type:DataType.BIGINT
    })
    user_id: number;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
    })
    amount: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    is_premium: boolean;

    @BelongsTo(() => User)
    user: User;
}
