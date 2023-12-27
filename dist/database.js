"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.DbConfig = void 0;
const typeorm_1 = require("typeorm");
const device_entity_1 = require("./device.entity");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.DbConfig = {
    type: 'postgres',
    username: process.env.DBUSERNAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5432,
    synchronize: true,
    logging: false,
    entities: [device_entity_1.SmartGen],
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
};
exports.AppDataSource = new typeorm_1.DataSource({ ...exports.DbConfig });
//# sourceMappingURL=database.js.map