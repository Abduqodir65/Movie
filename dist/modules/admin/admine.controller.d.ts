import { AdminService } from "./admin.service";
import { Admin } from "./models";
import { CreateAdminDto, UpdateAdminDto } from "./dtos";
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getAllAdmins(): Promise<Admin[]>;
    getSingleAdmin(id: string): Promise<Admin>;
    createAdmin(createAdminPayload: CreateAdminDto): Promise<{
        message: string;
        new_admin: Admin;
    }>;
    updateAdmin(id: string, updateAdminPayload: UpdateAdminDto): Promise<{
        message: string;
        updatedAdmin: Admin;
    }>;
    deleteAdmin(id: string): Promise<{
        message: string;
    }>;
}
