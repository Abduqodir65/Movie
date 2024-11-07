export interface CreatePaymentRequest {
    order_id: number;
    amount: number;
    status: string;
}
