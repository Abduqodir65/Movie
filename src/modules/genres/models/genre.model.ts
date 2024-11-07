import {  Column, DataType,  Model, Table } from 'sequelize-typescript';

@Table({ timestamps: true, tableName: 'genres' })
export class Genre extends Model {
    @Column({ allowNull: false, type: DataType.STRING })
    name: string;

}