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

@Table({ timestamps: true, tableName: 'comments' })
export class Comments extends Model<Comments> {
    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    text: string;

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
