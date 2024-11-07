import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { appConfig, dbConfig, jwtConfig } from './config'
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerModule } from '@nestjs/throttler';
import { Actor, ActorModule, Admin, AdminModule, AuthModule, Comments, CommentsModule, FileModule, Genre, GenreModule, GenreMovie, Likes, LikesModule, MailerModule, Movie, MovieActor, MovieActorModule, MovieModule, Order, OrderModule, OtpModule, Payment, PaymentModule, Subscription, SubscriptionModule, User, UserDevice, UserDeviceModule, UserModule, Wallet, WalletModule, WatchedVideos, WatchedVideosModule } from './modules';
import { CheckAuthGuard, CheckRoleGuard } from './guards';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';


@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 30000,
        limit: 300,
      },
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, dbConfig, jwtConfig],
    }),
    ServeStaticModule.forRoot({
      serveRoot: '/uploads',
      rootPath: './uploads',
    }),
    JwtModule.register({
      secret: 'my secret',
      global: true,
      signOptions: {
        expiresIn: 60 * 15,
      },
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        try {
          return {
            dialect: 'postgres',
            host: config.get('database.host'),
            port: config.get<number>('database.port'),
            username: config.get('database.user'),
            password: config.get('database.password'),
            database: config.get('database.dbName'),
            models: [Actor,Admin,Comments,GenreMovie,Genre,Likes,MovieActor,Movie,Order,Payment,Subscription,User,UserDevice,Wallet,WatchedVideos],
            synchronize: true,
            // sync: { force: true }, 
            logging: console.log,
            autoLoadModels: true,
          };
        } catch (error) {
          console.log(error);
        }
      },
    }),
    ActorModule,
    AdminModule,
    AuthModule,
    CommentsModule,
    FileModule,
    GenreModule,
    GenreModule,
    LikesModule,
    MovieActorModule,
    MovieModule,
    OrderModule,
    PaymentModule,
    SubscriptionModule,
    UserModule,
    UserDeviceModule,
    WalletModule,
    WatchedVideosModule,
    MailerModule,
    OtpModule
  ],
  controllers: [AppController],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: ThrottlerGuard
    // },    
    {
      useClass: CheckAuthGuard,
      provide: APP_GUARD,
    },
    {
      useClass: CheckRoleGuard,
      provide: APP_GUARD,
    },
  ],
})
export class AppModule {}