"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPager = void 0;
const btoa = typeof window !== "undefined"
    ? window.btoa
    : (text) => Buffer.from(text).toString("base64");
const cursor = (n) => btoa(`cursor:${n}`);
const buildPager = (_args, _defaults) => {
    var _a, _b, _c;
    const args = Object.assign(Object.assign({}, (_defaults !== null && _defaults !== void 0 ? _defaults : {})), (_args !== null && _args !== void 0 ? _args : {}));
    const offset = (_a = args === null || args === void 0 ? void 0 : args.offset) !== null && _a !== void 0 ? _a : 0;
    return {
        after: (_b = args.after) !== null && _b !== void 0 ? _b : (offset > 0 ? cursor(offset) : undefined),
        before: args.before,
        first: (_c = args.first) !== null && _c !== void 0 ? _c : args.limit,
        last: args.last,
    };
};
exports.buildPager = buildPager;
