import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { Payment } from "./models";

@Controller('payments')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

    @Get()
    async getAllPayments(): Promise<Payment[]> {
        return await this.paymentService.getAllPayments();
    }

    @Get("/:id")
    async getSinglePayment(@Param('id') id: string): Promise<Payment> {
        return await this.paymentService.getSinglePayment(+id);
    }

    @Post('/add')
    async createPayment(@Body() payload: any): Promise<{ message: string; new_payment: Payment }> {
        return await this.paymentService.createPayment(payload);
    }

    @Patch('update/:id')
    async updatePayment(@Param('id') id: string, @Body() payload: any): Promise<{ message: string, updatedPayment: Payment }> {
        return await this.paymentService.updatePayment(+id, payload);
    }

    @Delete('/delete/:id')
    async deletePayment(@Param('id') id: string): Promise<{ message: string }> {
        return await this.paymentService.deletePayment(+id);
    }
}
