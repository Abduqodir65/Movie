import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Movie } from 'src/modules/movies';

@Table({ timestamps: true, tableName: 'actors' })
export class Actor extends Model {
    @Column({ allowNull: false, type: DataType.STRING })
    name: string;

    @Column({ allowNull: false, type: DataType.STRING })
    image: string;

    @ForeignKey(() => Movie)
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    })
    movie_id: number;

    @BelongsTo(() => Movie)
    movie: Movie;
}
