"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageInfo = void 0;
const code_tag_1 = require("code-tag");
const datatype_1 = require("../core/datatype");
exports.PageInfo = (0, datatype_1.createDataType)({
    fragment: (0, code_tag_1.gql) `
    fragment PageInfo_PageInfo on PageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
  `,
    translator: (pageInfo) => {
        var _a, _b, _c, _d;
        return {
            endCursor: (_a = pageInfo.endCursor) !== null && _a !== void 0 ? _a : undefined,
            startCursor: (_b = pageInfo.startCursor) !== null && _b !== void 0 ? _b : undefined,
            hasNextPage: (_c = pageInfo.hasNextPage) !== null && _c !== void 0 ? _c : undefined,
            hasPreviousPage: (_d = pageInfo.hasPreviousPage) !== null && _d !== void 0 ? _d : undefined,
        };
    },
});
