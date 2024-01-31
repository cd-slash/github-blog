"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPinnedPosts = void 0;
const code_tag_1 = require("code-tag");
const func_1 = require("../utils/func");
const PostReduced_1 = require("../datatypes/PostReduced");
const Author_1 = require("../datatypes/Author");
(0, code_tag_1.gql) `
  query GetPinnedPosts($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      pinnedIssues(first: 3) {
        nodes {
          pinnedBy {
            ...Author_Actor
          }
          issue {
            ...Post_Issue
          }
        }
      }
    }
  }
`;
const getPinnedPosts = (blog) => () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const [owner, name] = blog.repo.split("/");
    const result = yield blog.sdk.GetPinnedPosts({ owner, name });
    const nodes = (_c = (_b = (_a = result.repository) === null || _a === void 0 ? void 0 : _a.pinnedIssues) === null || _b === void 0 ? void 0 : _b.nodes) !== null && _c !== void 0 ? _c : [];
    return {
        pinnedPosts: nodes.filter(func_1.isNonNull).map((pinnedIssue) => ({
            pinnedBy: Author_1.Author.translate(pinnedIssue.pinnedBy),
            post: PostReduced_1.PostReduced.translate(pinnedIssue.issue),
        })),
    };
});
exports.getPinnedPosts = getPinnedPosts;
