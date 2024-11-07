import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "./models";

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Get()
    async getAllOrders(): Promise<Order[]> {
        return await this.orderService.getAllOrders();
    }

    @Get("/:id")
    async getSingleOrder(@Param('id') id: string): Promise<Order> {
        return await this.orderService.getSingleOrder(+id);
    }

    @Post('/add')
    async createOrder(@Body() payload: any): Promise<{ message: string; new_order: Order }> {
        return await this.orderService.createOrder(payload);
    }

    @Patch('update/:id')
    async updateOrder(@Param('id') id: string, @Body() payload: any): Promise<{ message: string, updatedOrder: Order }> {
        return await this.orderService.updateOrder(+id, payload);
    }

    @Delete('/delete/:id')
    async deleteOrder(@Param('id') id: string): Promise<{ message: string }> {
        return await this.orderService.deleteOrder(+id);
    }
}
