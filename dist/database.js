"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.DbConfig = void 0;
const typeorm_1 = require("typeorm");
const device_entity_1 = require("./device.entity");
exports.DbConfig = {
    type: 'postgres',
    username: process.env.username,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port ? parseInt(process.env.port, 10) : 5432,
    ssl: {
        rejectUnauthorized: false,
    },
    synchronize: true,
    logging: false,
    entities: [device_entity_1.SmartGen],
};
exports.AppDataSource = new typeorm_1.DataSource({ ...exports.DbConfig });
//# sourceMappingURL=database.js.map