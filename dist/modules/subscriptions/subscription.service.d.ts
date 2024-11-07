import { Subscription } from "./models";
import { CreateSubscriptionDto, UpdateSubscriptionDto } from "./dtos";
export declare class SubscriptionService {
    private subscriptionModel;
    constructor(subscriptionModel: typeof Subscription);
    getAllSubscriptions(): Promise<Subscription[]>;
    getSingleSubscription(id: number): Promise<Subscription>;
    createSubscription(payload: CreateSubscriptionDto): Promise<{
        message: string;
        new_subscription: Subscription;
    }>;
    updateSubscription(id: number, payload: UpdateSubscriptionDto): Promise<{
        message: string;
        updatedSubscription: Subscription;
    }>;
    deleteSubscription(id: number): Promise<{
        message: string;
    }>;
}
