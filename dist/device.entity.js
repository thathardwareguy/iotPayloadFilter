"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartGen = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let SmartGen = class SmartGen {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SmartGen.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^(GEN-\d{4}-\d{4})$/, { message: 'deviceID must contain the string GEN and 8 numbers' }),
    __metadata("design:type", String)
], SmartGen.prototype, "deviceID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^(SN-\d{3}-\d{3})$/, { message: 'clientId must contain SN and 6 numbers' }),
    __metadata("design:type", String)
], SmartGen.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsIn)([0, 1]),
    __metadata("design:type", Number)
], SmartGen.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "vPhase1", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "vPhase2", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "vPhase3", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "I1", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "I2", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "I3", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "realPower1", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "realPower2", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "realPower3", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "apparentPower1", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "apparentPower2", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "apparentPower3", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "powerFactor", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "frequency", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "kwh", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SmartGen.prototype, "signalStrength", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], SmartGen.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], SmartGen.prototype, "updatedAt", void 0);
SmartGen = __decorate([
    (0, typeorm_1.Entity)({ name: 'smartGenTable' })
], SmartGen);
exports.SmartGen = SmartGen;
//# sourceMappingURL=device.entity.js.map