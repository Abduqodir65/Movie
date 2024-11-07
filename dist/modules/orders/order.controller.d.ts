import { OrderService } from "./order.service";
import { Order } from "./models";
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getAllOrders(): Promise<Order[]>;
    getSingleOrder(id: string): Promise<Order>;
    createOrder(payload: any): Promise<{
        message: string;
        new_order: Order;
    }>;
    updateOrder(id: string, payload: any): Promise<{
        message: string;
        updatedOrder: Order;
    }>;
    deleteOrder(id: string): Promise<{
        message: string;
    }>;
}
