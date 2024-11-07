import { Column, DataType, Model, Table } from 'sequelize-typescript';

export enum UserRoles {
    user = 'USER',
    admin = 'ADMIN',
}

@Table({ timestamps: true, tableName: 'users' })
export class User extends Model {
    @Column({ allowNull: false, type: DataType.STRING })
    username: string;

    @Column({ type: DataType.TEXT, allowNull: false, unique: true })
    email: string;

    @Column({ allowNull: false, type: DataType.STRING })
    password: string;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: "false" })
    is_premium: boolean;

    @Column({
        type: DataType.ENUM,
        values: [UserRoles.admin, UserRoles.user],
        allowNull: false,
        defaultValue: UserRoles.user,
    })
    role: UserRoles;

    @Column({ type: DataType.STRING, allowNull: true })
    image: string;

    @Column({ type: DataType.STRING, allowNull: true })
    passwordResetToken: string;

    @Column({ type: DataType.DATE, allowNull: true })
    passwordResetTokenExpireTime: Date;
}
