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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("./models");
let OrderService = class OrderService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async getAllOrders() {
        return await this.orderModel.findAll();
    }
    async getSingleOrder(id) {
        return await this.orderModel.findOne({ where: { id } });
    }
    async createOrder(payload) {
        const new_order = await this.orderModel.create({
            wallet_id: payload.wallet_id,
            subscription_id: payload.subscription_id,
            period: payload.period
        });
        return { message: 'Order created successfully', new_order };
    }
    async updateOrder(id, payload) {
        await this.orderModel.update(payload, { where: { id } });
        const updatedOrder = await this.orderModel.findOne({ where: { id } });
        return { message: 'Order updated successfully', updatedOrder };
    }
    async deleteOrder(id) {
        const order = await this.orderModel.findByPk(id);
        await order.destroy();
        return { message: 'Order deleted successfully' };
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.Order)),
    __metadata("design:paramtypes", [Object])
], OrderService);
//# sourceMappingURL=order.service.js.map