"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const appConfig = () => ({
    appConfig: {
        port: parseInt(process.env.APP_PORT) || 3000,
        host: process.env.APP_HOST,
    },
});
exports.appConfig = appConfig;
//# sourceMappingURL=app.config.js.map