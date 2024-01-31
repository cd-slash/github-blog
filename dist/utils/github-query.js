"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubQueryBuilder = void 0;
const classnames_1 = __importDefault(require("classnames"));
const multiple = (prefix, value) => {
    if (!value)
        return null;
    return (Array.isArray(value) ? value : [value]).map((v) => `${prefix}:${v}`);
};
const single = (prefix, value) => {
    if (!value)
        return null;
    return `${prefix}:${value}`;
};
const githubQueryBuilder = (repo) => (_args, _defaults) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    const args = _args !== null && _args !== void 0 ? _args : {};
    const defaults = _defaults !== null && _defaults !== void 0 ? _defaults : {};
    const query = (0, classnames_1.default)(`repo:${repo}`, // Should search on instance repo
    `type:issue`, // Should search for issues only
    (_a = args.overrides) !== null && _a !== void 0 ? _a : defaults.overrides, // Overrides should came before as the former has priority
    `is:open`, // Search for opened issues only
    multiple("label:tag", (_b = args.tag) !== null && _b !== void 0 ? _b : defaults.tag), multiple("-label:tag", (_c = args.notTag) !== null && _c !== void 0 ? _c : defaults.notTag), multiple("label:flag", (_d = args.flag) !== null && _d !== void 0 ? _d : defaults.flag), multiple("-label:flag", (_e = args.notFlag) !== null && _e !== void 0 ? _e : defaults.notFlag), multiple("label:state", (_f = args.state) !== null && _f !== void 0 ? _f : defaults.state), multiple("-label:state", (_g = args.notState) !== null && _g !== void 0 ? _g : defaults.notState), multiple("label:type", (_h = args.type) !== null && _h !== void 0 ? _h : defaults.type), multiple("-label:type", (_j = args.notType) !== null && _j !== void 0 ? _j : defaults.notType), single("label:slug", (_k = args.slug) !== null && _k !== void 0 ? _k : defaults.slug), multiple("author", (_l = args.author) !== null && _l !== void 0 ? _l : defaults.author), multiple("-author", (_m = args.notAuthor) !== null && _m !== void 0 ? _m : defaults.notAuthor), single("sort", (_p = (_o = args.sort) !== null && _o !== void 0 ? _o : defaults.sort) !== null && _p !== void 0 ? _p : "created"), (_q = args.search) !== null && _q !== void 0 ? _q : defaults.search // Free field that can be used to search for terms
    );
    return query;
};
exports.githubQueryBuilder = githubQueryBuilder;
