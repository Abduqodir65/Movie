"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const morgan = require("morgan");
const compression = require("compression");
const app_module_1 = require("./app.module");
const filters_1 = require("./filters");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.enableCors({
        origin: '*',
        methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
    });
    app.use(compression());
    app.useGlobalPipes(new common_1.ValidationPipe({
        exceptionFactory(errors) {
            const errorMsgs = errors.map((err) => Object.values(err.constraints).join(', '));
            throw new common_1.BadRequestException(errorMsgs.join(' && '));
        },
    }));
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.useGlobalFilters(new filters_1.ExceptionHandlerFilter());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Luxmir')
        .setDescription('Luxmir API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useStaticAssets((0, path_1.join)(__dirname, '../src/public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '../src/views'));
    app.setViewEngine('ejs');
    app.use(morgan('tiny'));
    await app.listen(configService.get('appConfig.port'), () => {
        console.log(`Listening on ${configService.get('appConfig.port')}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map