import {
    Table,
    Column,
    Model,
    DataType,
} from 'sequelize-typescript';

@Table({ timestamps: true, tableName: 'admin' })
export class Admin extends Model<Admin> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;
}
