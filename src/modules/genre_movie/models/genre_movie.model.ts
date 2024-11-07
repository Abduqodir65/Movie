import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Movie } from 'src/modules/movies'; 
import { Genre } from 'src/modules/genres'; 

@Table({ timestamps: false, tableName: 'genre_movie' })
export class GenreMovie extends Model {
    @ForeignKey(() => Movie)
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    })
    movie_id: number;

    @ForeignKey(() => Genre)
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    })
    genre_id: number;
}
