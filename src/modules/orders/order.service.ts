import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Order } from "./models";
import { CreateOrderDto, UpdateOrderDto } from "./dtos";

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order) private orderModel: typeof Order) {}

    async getAllOrders(): Promise<Order[]> {
        return await this.orderModel.findAll();
    }

    async getSingleOrder(id: number): Promise<Order> {
        return await this.orderModel.findOne({ where: { id } });
    }

    async createOrder(payload: CreateOrderDto): Promise<{ message: string; new_order: Order }> {
        const new_order = await this.orderModel.create({
            wallet_id:payload.wallet_id,
            subscription_id: payload.subscription_id,
            period:payload.period
        });
        return { message: 'Order created successfully', new_order };
    }

    async updateOrder(id: number, payload: UpdateOrderDto): Promise<{ message: string, updatedOrder: Order }> {
        await this.orderModel.update(payload, { where: { id } });
        const updatedOrder = await this.orderModel.findOne({ where: { id } });
        return { message: 'Order updated successfully', updatedOrder };
    }

    async deleteOrder(id: number): Promise<{ message: string }> {
        const order = await this.orderModel.findByPk(id);
        await order.destroy();
        return { message: 'Order deleted successfully' };
    }
}
