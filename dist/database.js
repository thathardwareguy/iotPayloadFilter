"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.DbConfig = void 0;
const typeorm_1 = require("typeorm");
const device_entity_1 = require("./device.entity");
const types_1 = require("./types");
exports.DbConfig = {
    type: 'postgres',
    username: types_1.vars.username,
    host: types_1.vars.host,
    database: types_1.vars.database,
    password: types_1.vars.password,
    port: types_1.vars.port,
    ssl: true,
    synchronize: true,
    logging: false,
    entities: [device_entity_1.SmartGen],
};
exports.AppDataSource = new typeorm_1.DataSource({ ...exports.DbConfig });
//# sourceMappingURL=database.js.map