"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
const jwtConfig = () => ({
    jwt: {
        accessKey: process.env.ACCESS_TOKEN_SECRET_KEY,
        accessTime: parseInt(process.env.ACCESS_TOKEN_EXPIRE_TIME),
        refreshKey: process.env.REFRESH_TOKEN_SECRET_KEY,
        refreshTime: process.env.REFRESH_TOKEN_EXPIRE_TIME,
    },
});
exports.jwtConfig = jwtConfig;
//# sourceMappingURL=jwt.config.js.map