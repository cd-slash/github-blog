"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const code_tag_1 = require("code-tag");
const datatype_1 = require("../core/datatype");
exports.Label = (0, datatype_1.createDataType)({
    fragment: (0, code_tag_1.gql) `
    fragment Label_Label on Label {
      id
      name
      color
      issues {
        totalCount
      }
    }
  `,
    translator: (label) => {
        const [prefix, ...name] = label.name.split(":");
        return {
            id: label.id,
            name: name.join(":"),
            prefix: prefix,
            fullName: label.name,
            color: label.color,
            quantity: label.issues.totalCount,
        };
    },
});
