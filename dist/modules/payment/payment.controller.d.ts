import { PaymentService } from "./payment.service";
import { Payment } from "./models";
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    getAllPayments(): Promise<Payment[]>;
    getSinglePayment(id: string): Promise<Payment>;
    createPayment(payload: any): Promise<{
        message: string;
        new_payment: Payment;
    }>;
    updatePayment(id: string, payload: any): Promise<{
        message: string;
        updatedPayment: Payment;
    }>;
    deletePayment(id: string): Promise<{
        message: string;
    }>;
}
