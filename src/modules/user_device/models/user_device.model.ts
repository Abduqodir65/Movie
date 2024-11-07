import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/modules/user/models';

@Table({ tableName: 'user_devices', timestamps: false })
export class UserDevice extends Model {
    @ForeignKey(() => User)
    @Column({ allowNull: false, type: DataType.INTEGER })
    userId: number;

    @Column({ allowNull: false, type: DataType.DATE })
    loginTime: Date;

    @Column({ allowNull: true, type: DataType.STRING })
    device: string;
}
