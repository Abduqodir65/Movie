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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("./models");
let PaymentService = class PaymentService {
    constructor(paymentModel) {
        this.paymentModel = paymentModel;
    }
    async getAllPayments() {
        return await this.paymentModel.findAll();
    }
    async getSinglePayment(id) {
        return await this.paymentModel.findOne({ where: { id } });
    }
    async createPayment(payload) {
        const new_payment = await this.paymentModel.create({
            order_id: payload.order_id,
            amount: payload.amount,
            status: payload.status
        });
        return { message: 'Payment created successfully', new_payment };
    }
    async updatePayment(id, payload) {
        await this.paymentModel.update(payload, { where: { id } });
        const updatedPayment = await this.paymentModel.findOne({ where: { id } });
        return { message: 'Payment updated successfully', updatedPayment };
    }
    async deletePayment(id) {
        const payment = await this.paymentModel.findByPk(id);
        await payment.destroy();
        return { message: 'Payment deleted successfully' };
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.Payment)),
    __metadata("design:paramtypes", [Object])
], PaymentService);
//# sourceMappingURL=payment.service.js.map