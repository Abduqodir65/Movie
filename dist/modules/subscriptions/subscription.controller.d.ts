import { SubscriptionService } from "./subscription.service";
import { Subscription } from "./models";
export declare class SubscriptionController {
    private readonly subscriptionService;
    constructor(subscriptionService: SubscriptionService);
    getAllSubscriptions(): Promise<Subscription[]>;
    getSingleSubscription(id: string): Promise<Subscription>;
    createSubscription(payload: any): Promise<{
        message: string;
        new_subscription: Subscription;
    }>;
    updateSubscription(id: string, payload: any): Promise<{
        message: string;
        updatedSubscription: Subscription;
    }>;
    deleteSubscription(id: string): Promise<{
        message: string;
    }>;
}
