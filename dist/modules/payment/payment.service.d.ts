import { Payment } from "./models";
import { CreatePaymentDto, UpdatePaymentDto } from "./dtos";
export declare class PaymentService {
    private paymentModel;
    constructor(paymentModel: typeof Payment);
    getAllPayments(): Promise<Payment[]>;
    getSinglePayment(id: number): Promise<Payment>;
    createPayment(payload: CreatePaymentDto): Promise<{
        message: string;
        new_payment: Payment;
    }>;
    updatePayment(id: number, payload: UpdatePaymentDto): Promise<{
        message: string;
        updatedPayment: Payment;
    }>;
    deletePayment(id: number): Promise<{
        message: string;
    }>;
}
