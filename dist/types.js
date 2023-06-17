"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.vars = void 0;
;
;
exports.vars = {
    username: (_a = process.env.USERNAME) !== null && _a !== void 0 ? _a : '',
    host: (_b = process.env.HOST) !== null && _b !== void 0 ? _b : '',
    database: (_c = process.env.DATABASE) !== null && _c !== void 0 ? _c : '',
    password: (_d = process.env.PASSWORD) !== null && _d !== void 0 ? _d : '',
    port: Number((_e = process.env.PORT) !== null && _e !== void 0 ? _e : '5432')
};
//# sourceMappingURL=types.js.map