import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Subscription } from "./models";
import { CreateSubscriptionDto, UpdateSubscriptionDto } from "./dtos";

@Injectable()
export class SubscriptionService {
    constructor(
        @InjectModel(Subscription) private subscriptionModel: typeof Subscription,
    ) { }

    async getAllSubscriptions(): Promise<Subscription[]> {
        return await this.subscriptionModel.findAll();
    }

    async getSingleSubscription(id: number): Promise<Subscription> {
        return await this.subscriptionModel.findOne({ where: { id } });
    }

    async createSubscription(payload: CreateSubscriptionDto): Promise<{ message: string; new_subscription: Subscription }> {
        const new_subscription = await this.subscriptionModel.create({
            type:payload.type,
            price: payload.price
        });
        return { message: 'Subscription created successfully', new_subscription };
    }

    async updateSubscription(id: number, payload: UpdateSubscriptionDto): Promise<{ message: string, updatedSubscription: Subscription }> {
        await this.subscriptionModel.update(payload, { where: { id } });
        const updatedSubscription = await this.subscriptionModel.findOne({ where: { id } });
        return { message: 'Subscription updated successfully', updatedSubscription };
    }

    async deleteSubscription(id: number): Promise<{ message: string }> {
        const subscription = await this.subscriptionModel.findByPk(id);
        await subscription.destroy();
        return { message: 'Subscription deleted successfully' };
    }
}
