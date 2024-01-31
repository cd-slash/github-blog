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
exports.getPosts = void 0;
const code_tag_1 = require("code-tag");
const func_1 = require("../utils/func");
const PostReduced_1 = require("../datatypes/PostReduced");
(0, code_tag_1.gql) `
  query GetPosts($query: String!, $first: Int, $last: Int, $before: String, $after: String) {
    search(query: $query, first: $first, last: $last, before: $before, after: $after, type: ISSUE) {
      issueCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          ...Post_Issue
        }
      }
    }
  }
`;
const getPosts = (blog) => (params) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const query = blog.buildQuery(params.query);
    const pager = blog.buildPager(params.pager);
    const result = yield blog.sdk.GetPosts(Object.assign({ query }, pager));
    const edges = (_a = result.search.edges) !== null && _a !== void 0 ? _a : [];
    const pageInfo = (_b = result.search.pageInfo) !== null && _b !== void 0 ? _b : {};
    const totalCount = (_c = result.search.issueCount) !== null && _c !== void 0 ? _c : 0;
    return {
        totalCount,
        pageInfo: {
            endCursor: pageInfo.endCursor,
            startCursor: pageInfo.startCursor,
            hasNextPage: pageInfo.hasNextPage,
            hasPreviousPage: pageInfo.hasPreviousPage,
        },
        edges: edges.filter(func_1.isNonNull).map((edge) => {
            return {
                cursor: edge.cursor,
                post: PostReduced_1.PostReduced.translate(edge.node),
            };
        }),
    };
});
exports.getPosts = getPosts;
