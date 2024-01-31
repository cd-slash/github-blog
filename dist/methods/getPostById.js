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
exports.getPostById = void 0;
const code_tag_1 = require("code-tag");
const Post_1 = require("../datatypes/Post");
(0, code_tag_1.gql) `
  query GetPostById($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $number) {
        ...Post_Issue
      }
    }
  }
`;
const getPostById = (blog) => () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const [owner, name] = blog.repo.split("/");
    const result = yield blog.sdk.GetPostById({ owner, name, number: 1 });
    const issue = (_a = result.repository) === null || _a === void 0 ? void 0 : _a.issue;
    if (!issue) {
        return { post: null };
    }
    return {
        post: Post_1.Post.translate(issue),
    };
});
exports.getPostById = getPostById;
