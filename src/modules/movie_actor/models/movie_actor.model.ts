import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Movie } from 'src/modules/movies'; 
import { Actor } from 'src/modules/actor/models'; 

@Table({ timestamps: false, tableName: 'movie_actor' })
export class MovieActor extends Model {
    @ForeignKey(() => Movie)
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    })
    movie_id: number;

    @ForeignKey(() => Actor)
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    })
    actor_id: number;
}