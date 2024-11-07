import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    DataType,
} from 'sequelize-typescript';
import { User } from 'src/modules/user';
import { Movie } from 'src/modules/movies';

@Table({ timestamps: true, tableName: 'likes' })
export class Likes extends Model {
    @ForeignKey(() => User)
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
    })
    user_id: number;

    @ForeignKey(() => Movie)
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
    })
    movie_id: number;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Movie)
    movie: Movie;
}
