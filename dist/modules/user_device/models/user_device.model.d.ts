import { Model } from 'sequelize-typescript';
export declare class UserDevice extends Model {
    userId: number;
    loginTime: Date;
    device: string;
}
