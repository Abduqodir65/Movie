"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const dbConfig = () => ({
    database: {
        port: parseInt(process.env.DB_PORT),
        host: process.env.DB_HOST,
        dbName: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        user: process.env.DB_USER,
    },
});
exports.dbConfig = dbConfig;
//# sourceMappingURL=db.config.js.map