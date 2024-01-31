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
exports.getComments = void 0;
const code_tag_1 = require("code-tag");
const func_1 = require("../utils/func");
const Comment_1 = require("../datatypes/Comment");
const PageInfo_1 = require("../datatypes/PageInfo");
(0, code_tag_1.gql) `
  query GetComments($query: String!, $first: Int, $last: Int, $before: String, $after: String) {
    search(first: 1, type: ISSUE, query: $query) {
      nodes {
        ... on Issue {
          comments(first: $first, last: $last, before: $before, after: $after) {
            totalCount
            pageInfo {
              ...PageInfo_PageInfo
            }
            edges {
              cursor
              node {
                ...Comment_IssueComment
              }
            }
          }
        }
      }
    }
  }
`;
const getComments = (blog) => (params) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const query = blog.buildQuery(params.query);
    const pager = blog.buildPager(params.pager);
    const result = yield blog.sdk.GetComments(Object.assign({ query }, pager));
    const issue = (_a = result.search.nodes) === null || _a === void 0 ? void 0 : _a[0];
    if (!issue) {
        return {
            pageInfo: {},
            totalCount: 0,
            edges: [],
        };
    }
    const connection = issue.comments;
    const edges = (_b = connection.edges) !== null && _b !== void 0 ? _b : [];
    const pageInfo = (_c = connection.pageInfo) !== null && _c !== void 0 ? _c : {};
    const totalCount = (_d = connection.totalCount) !== null && _d !== void 0 ? _d : 0;
    return {
        totalCount,
        pageInfo: PageInfo_1.PageInfo.translate(pageInfo),
        edges: edges.filter(func_1.isNonNull).map((edge) => {
            return {
                cursor: edge.cursor,
                comment: Comment_1.Comment.translate(edge.node),
            };
        }),
    };
});
exports.getComments = getComments;
