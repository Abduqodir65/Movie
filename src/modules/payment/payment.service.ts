import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Payment } from "./models";
import { CreatePaymentDto, UpdatePaymentDto } from "./dtos";

@Injectable()
export class PaymentService {
    constructor(
        @InjectModel(Payment) private paymentModel: typeof Payment,
    ) { }

    async getAllPayments(): Promise<Payment[]> {
        return await this.paymentModel.findAll();
    }

    async getSinglePayment(id: number): Promise<Payment> {
        return await this.paymentModel.findOne({ where: { id } });
    }

    async createPayment(payload: CreatePaymentDto): Promise<{ message: string; new_payment: Payment }> {
        const new_payment = await this.paymentModel.create({
            order_id:payload.order_id,
            amount: payload.amount,
            status: payload.status
        });
        return { message: 'Payment created successfully', new_payment };
    }

    async updatePayment(id: number, payload: UpdatePaymentDto): Promise<{ message: string, updatedPayment: Payment }> {
        await this.paymentModel.update(payload, { where: { id } });
        const updatedPayment = await this.paymentModel.findOne({ where: { id } });
        return { message: 'Payment updated successfully', updatedPayment };
    }

    async deletePayment(id: number): Promise<{ message: string }> {
        const payment = await this.paymentModel.findByPk(id);
        await payment.destroy();
        return { message: 'Payment deleted successfully' };
    }
}
