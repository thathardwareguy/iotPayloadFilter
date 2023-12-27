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
exports.Handler = void 0;
const class_validator_1 = require("class-validator");
const database_1 = require("./database");
const device_entity_1 = require("./device.entity");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
async function Handler(event) {
    try {
        await (0, class_validator_1.validateOrReject)(event);
        console.log('Validation successful!');
        await initializeDataSource();
        const savedData = await createAndSaveSmartGen(event);
        return { success: true, data: savedData };
    }
    catch (errors) {
        console.error('Validation failed. Errors: ', errors);
        if (errors instanceof Array && errors.length > 0 && errors[0] instanceof class_validator_1.ValidationError) {
            console.error('First validation error: ', errors[0].toString());
        }
        return { success: false, error: 'Validation failed' };
    }
}
exports.Handler = Handler;
async function initializeDataSource() {
    try {
        if (!database_1.AppDataSource.isInitialized) {
            await database_1.AppDataSource.initialize();
            console.log('Data Source has been set up!');
        }
    }
    catch (err) {
        console.error('Error during Data Source initialization. Check config!', err);
        throw err;
    }
}
async function createAndSaveSmartGen(event) {
    const { frequency, ...rest } = event;
    const smartGenRepository = database_1.AppDataSource.getRepository(device_entity_1.SmartGen);
    const newDataEntry = smartGenRepository.create(rest);
    newDataEntry.frequency = 10 * frequency;
    try {
        const savedData = await smartGenRepository.save(newDataEntry);
        console.log('Data saved to the database:', savedData);
        return savedData;
    }
    catch (err) {
        console.error('Error saving to the database:', err);
        throw err;
    }
}
//# sourceMappingURL=handler.js.map