import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AdminService } from "./admin.service";
import { Admin } from "./models";
import { CreateAdminDto, UpdateAdminDto } from "./dtos";

@ApiTags('Admins')
@Controller('admins')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Get()
    async getAllAdmins(): Promise<Admin[]> {
        return await this.adminService.getAllAdmins();
    }

    @Get("/:id")
    async getSingleAdmin(@Param('id') id: string): Promise<Admin> {
        return await this.adminService.getSingleAdmin(+id);
    }

    @Post('/add')
    async createAdmin(@Body() createAdminPayload: CreateAdminDto): Promise<{ message: string, new_admin: Admin }> {
        return await this.adminService.createAdmin(createAdminPayload);
    }

    @Patch('update/:id')
    async updateAdmin(
        @Param('id') id: string,
        @Body() updateAdminPayload: UpdateAdminDto
    ): Promise<{ message: string, updatedAdmin: Admin }> {
        return await this.adminService.updateAdmin(+id, updateAdminPayload);
    }

    @Delete('/delete/:id')
    async deleteAdmin(@Param('id') id: string): Promise<{ message: string }> {
        return await this.adminService.deleteAdmin(+id);
    }
}
