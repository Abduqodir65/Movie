"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("./models");
let SubscriptionService = class SubscriptionService {
    constructor(subscriptionModel) {
        this.subscriptionModel = subscriptionModel;
    }
    async getAllSubscriptions() {
        return await this.subscriptionModel.findAll();
    }
    async getSingleSubscription(id) {
        return await this.subscriptionModel.findOne({ where: { id } });
    }
    async createSubscription(payload) {
        const new_subscription = await this.subscriptionModel.create({
            type: payload.type,
            price: payload.price
        });
        return { message: 'Subscription created successfully', new_subscription };
    }
    async updateSubscription(id, payload) {
        await this.subscriptionModel.update(payload, { where: { id } });
        const updatedSubscription = await this.subscriptionModel.findOne({ where: { id } });
        return { message: 'Subscription updated successfully', updatedSubscription };
    }
    async deleteSubscription(id) {
        const subscription = await this.subscriptionModel.findByPk(id);
        await subscription.destroy();
        return { message: 'Subscription deleted successfully' };
    }
};
exports.SubscriptionService = SubscriptionService;
exports.SubscriptionService = SubscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.Subscription)),
    __metadata("design:paramtypes", [Object])
], SubscriptionService);
//# sourceMappingURL=subscription.service.js.map