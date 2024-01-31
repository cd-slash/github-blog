"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostReduced = void 0;
const code_tag_1 = require("code-tag");
const datatype_1 = require("../core/datatype");
const Post_1 = require("./Post");
exports.PostReduced = (0, datatype_1.createDataType)({
    fragment: (0, code_tag_1.gql) `
    fragment PostReduced_Issue on Issue {
      ...Post_Issue
    }
  `,
    translator: (issue) => {
        const _a = Post_1.Post.translate(issue), { body } = _a, post = __rest(_a, ["body"]);
        return post;
    },
});
