"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const serve_static_1 = require("@nestjs/serve-static");
const config_2 = require("./config");
const jwt_1 = require("@nestjs/jwt");
const throttler_1 = require("@nestjs/throttler");
const modules_1 = require("./modules");
const guards_1 = require("./guards");
const core_1 = require("@nestjs/core");
const app_controller_1 = require("./app.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: 30000,
                    limit: 300,
                },
            ]),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [config_2.appConfig, config_2.dbConfig, config_2.jwtConfig],
            }),
            serve_static_1.ServeStaticModule.forRoot({
                serveRoot: '/uploads',
                rootPath: './uploads',
            }),
            jwt_1.JwtModule.register({
                secret: 'my secret',
                global: true,
                signOptions: {
                    expiresIn: 60 * 15,
                },
            }),
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    try {
                        return {
                            dialect: 'postgres',
                            host: config.get('database.host'),
                            port: config.get('database.port'),
                            username: config.get('database.user'),
                            password: config.get('database.password'),
                            database: config.get('database.dbName'),
                            models: [modules_1.Actor, modules_1.Admin, modules_1.Comments, modules_1.GenreMovie, modules_1.Genre, modules_1.Likes, modules_1.MovieActor, modules_1.Movie, modules_1.Order, modules_1.Payment, modules_1.Subscription, modules_1.User, modules_1.UserDevice, modules_1.Wallet, modules_1.WatchedVideos],
                            synchronize: true,
                            logging: console.log,
                            autoLoadModels: true,
                        };
                    }
                    catch (error) {
                        console.log(error);
                    }
                },
            }),
            modules_1.ActorModule,
            modules_1.AdminModule,
            modules_1.AuthModule,
            modules_1.CommentsModule,
            modules_1.FileModule,
            modules_1.GenreModule,
            modules_1.GenreModule,
            modules_1.LikesModule,
            modules_1.MovieActorModule,
            modules_1.MovieModule,
            modules_1.OrderModule,
            modules_1.PaymentModule,
            modules_1.SubscriptionModule,
            modules_1.UserModule,
            modules_1.UserDeviceModule,
            modules_1.WalletModule,
            modules_1.WatchedVideosModule,
            modules_1.MailerModule,
            modules_1.OtpModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                useClass: guards_1.CheckAuthGuard,
                provide: core_1.APP_GUARD,
            },
            {
                useClass: guards_1.CheckRoleGuard,
                provide: core_1.APP_GUARD,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map