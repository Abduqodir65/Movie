import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { SubscriptionService } from "./subscription.service";
import { Subscription } from "./models";

@Controller('subscriptions')
export class SubscriptionController {
    constructor(private readonly subscriptionService: SubscriptionService) {}

    @Get()
    async getAllSubscriptions(): Promise<Subscription[]> {
        return await this.subscriptionService.getAllSubscriptions();
    }

    @Get("/:id")
    async getSingleSubscription(@Param('id') id: string): Promise<Subscription> {
        return await this.subscriptionService.getSingleSubscription(+id);
    }

    @Post('/add')
    async createSubscription(@Body() payload: any): Promise<{ message: string; new_subscription: Subscription }> {
        return await this.subscriptionService.createSubscription(payload);
    }

    @Patch('update/:id')
    async updateSubscription(@Param('id') id: string, @Body() payload: any): Promise<{ message: string, updatedSubscription: Subscription }> {
        return await this.subscriptionService.updateSubscription(+id, payload);
    }

    @Delete('/delete/:id')
    async deleteSubscription(@Param('id') id: string): Promise<{ message: string }> {
        return await this.subscriptionService.deleteSubscription(+id);
    }
}
