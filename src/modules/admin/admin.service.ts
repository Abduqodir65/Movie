import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Admin } from "./models";
import { CreateAdminDto, UpdateAdminDto } from './dtos'

@Injectable()
export class AdminService {
    constructor(@InjectModel(Admin) private adminModel: typeof Admin) { }

    async getAllAdmins(): Promise<Admin[]> {
        return await this.adminModel.findAll();
    }

    async getSingleAdmin(id: number): Promise<Admin> {
        return await this.adminModel.findOne({ where: { id } });
    }

    async createAdmin(payload: CreateAdminDto): Promise<{ message: string; new_admin: Admin }> {
        const new_admin = await this.adminModel.create({ name: payload.name });
        return { message: 'Admin created successfully', new_admin };
    }

    async updateAdmin(id: number, payload: UpdateAdminDto): Promise<{ message: string, updatedAdmin: Admin }> {
        await this.adminModel.update(payload, { where: { id } });
        const updatedAdmin = await this.adminModel.findOne({ where: { id } });
        return { message: 'Admin updated successfully', updatedAdmin };
    }

    async deleteAdmin(id: number): Promise<{ message: string }> {
        const admin = await this.adminModel.findByPk(id);
        await admin.destroy();
        return { message: 'Admin deleted successfully' };
    }
}
