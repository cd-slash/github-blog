"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Labels = void 0;
const code_tag_1 = require("code-tag");
const func_1 = require("../utils/func");
const datatype_1 = require("../core/datatype");
exports.Labels = (0, datatype_1.createDataType)({
    fragment: (0, code_tag_1.gql) `
    fragment Labels_LabelConnection on LabelConnection {
      nodes {
        name
      }
    }
  `,
    translator: ({ nodes }) => {
        return (nodes !== null && nodes !== void 0 ? nodes : [])
            .filter(func_1.isNonNull)
            .map((label) => label.name)
            .reduce((acc, curr) => {
            const [_prop, value] = curr.split(":");
            const prop = _prop;
            return Object.assign(Object.assign({}, acc), { [prop]: acc[prop] ? [...acc[prop], value] : [value] });
        }, {});
    },
    fallback: {},
});
