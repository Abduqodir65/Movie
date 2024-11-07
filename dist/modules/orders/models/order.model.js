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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../../subscriptions/models");
const wallet_1 = require("../../wallet");
let Order = class Order extends sequelize_typescript_1.Model {
};
exports.Order = Order;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => wallet_1.Wallet),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    }),
    __metadata("design:type", Number)
], Order.prototype, "wallet_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => models_1.Subscription),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    }),
    __metadata("design:type", Number)
], Order.prototype, "subscription_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Order.prototype, "period", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => wallet_1.Wallet),
    __metadata("design:type", wallet_1.Wallet)
], Order.prototype, "wallet", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => models_1.Subscription),
    __metadata("design:type", models_1.Subscription)
], Order.prototype, "subscription", void 0);
exports.Order = Order = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, tableName: 'orders' })
], Order);
//# sourceMappingURL=order.model.js.map