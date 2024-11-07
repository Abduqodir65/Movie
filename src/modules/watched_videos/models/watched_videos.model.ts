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

@Table({ timestamps: true, tableName: 'watched_videos' })
export class WatchedVideos extends Model{
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
