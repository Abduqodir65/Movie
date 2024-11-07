import { Admin } from "./models";
import { CreateAdminDto, UpdateAdminDto } from './dtos';
export declare class AdminService {
    private adminModel;
    constructor(adminModel: typeof Admin);
    getAllAdmins(): Promise<Admin[]>;
    getSingleAdmin(id: number): Promise<Admin>;
    createAdmin(payload: CreateAdminDto): Promise<{
        message: string;
        new_admin: Admin;
    }>;
    updateAdmin(id: number, payload: UpdateAdminDto): Promise<{
        message: string;
        updatedAdmin: Admin;
    }>;
    deleteAdmin(id: number): Promise<{
        message: string;
    }>;
}
