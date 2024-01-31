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
exports.getLabels = void 0;
const code_tag_1 = require("code-tag");
const func_1 = require("../utils/func");
const Label_1 = require("../datatypes/Label");
const PageInfo_1 = require("../datatypes/PageInfo");
(0, code_tag_1.gql) `
  query GetLabels(
    $query: String
    $name: String!
    $owner: String!
    $first: Int
    $last: Int
    $before: String
    $after: String
  ) {
    repository(name: $name, owner: $owner) {
      labels(query: $query, first: $first, last: $last, before: $before, after: $after) {
        totalCount
        pageInfo {
          ...PageInfo_PageInfo
        }
        edges {
          cursor
          node {
            ...Label_Label
          }
        }
      }
    }
  }
`;
const getLabels = (blog) => (params) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const [owner, name] = blog.repo.split("/");
    const pager = blog.buildPager(params === null || params === void 0 ? void 0 : params.pager);
    const result = yield blog.sdk.GetLabels(Object.assign(Object.assign({ owner, name }, pager), { first: (_a = pager.first) !== null && _a !== void 0 ? _a : 100 }));
    const labels = (_b = result.repository) === null || _b === void 0 ? void 0 : _b.labels;
    if (!labels) {
        return {
            totalCount: 0,
            pageInfo: {},
            edges: [],
        };
    }
    const totalCount = (_c = labels.totalCount) !== null && _c !== void 0 ? _c : 0;
    const pageInfo = (_d = labels.pageInfo) !== null && _d !== void 0 ? _d : {};
    const edges = (_e = labels.edges) !== null && _e !== void 0 ? _e : [];
    return {
        totalCount,
        pageInfo: PageInfo_1.PageInfo.translate(pageInfo),
        edges: edges.filter(func_1.isNonNull).map((edge) => {
            return {
                cursor: edge.cursor,
                label: Label_1.Label.translate(edge.node),
            };
        }),
    };
});
exports.getLabels = getLabels;
