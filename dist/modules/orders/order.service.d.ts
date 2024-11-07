import { Order } from "./models";
import { CreateOrderDto, UpdateOrderDto } from "./dtos";
export declare class OrderService {
    private orderModel;
    constructor(orderModel: typeof Order);
    getAllOrders(): Promise<Order[]>;
    getSingleOrder(id: number): Promise<Order>;
    createOrder(payload: CreateOrderDto): Promise<{
        message: string;
        new_order: Order;
    }>;
    updateOrder(id: number, payload: UpdateOrderDto): Promise<{
        message: string;
        updatedOrder: Order;
    }>;
    deleteOrder(id: number): Promise<{
        message: string;
    }>;
}
