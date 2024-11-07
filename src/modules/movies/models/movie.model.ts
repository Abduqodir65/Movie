import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/modules/user';

@Table({ timestamps: true, tableName: 'movies' })
export class Movie extends Model {
    @Column({ allowNull: false, type: DataType.STRING })
    title: string;

    @Column({ allowNull: false, type: DataType.STRING })
    description: string;

    @Column({ allowNull: false, type: DataType.STRING })
    director: string;

    @Column({ allowNull: false, type: DataType.INTEGER })
    rating: number;

    @Column({ allowNull: false, type: DataType.STRING })
    language: string;

    @Column({ allowNull: false, type: DataType.INTEGER })
    duration: number;

    @Column({ allowNull: false, type: DataType.INTEGER })
    year: number;

    @Column({ allowNull: false, type: DataType.STRING })
    image: string;

    @Column({ allowNull: false, type: DataType.STRING })
    video: string

    @ForeignKey(() => User)
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    })
    user_id: number;

    @BelongsTo(() => User)
    user: User


}