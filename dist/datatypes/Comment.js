"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const code_tag_1 = require("code-tag");
const datatype_1 = require("../core/datatype");
const Author_1 = require("./Author");
const Reactions_1 = require("./Reactions");
exports.Comment = (0, datatype_1.createDataType)({
    fragment: (0, code_tag_1.gql) `
    fragment Comment_IssueComment on IssueComment {
      id
      body
      createdAt
      lastEditedAt
      isMinimized
      minimizedReason
      reactions {
        totalCount
      }
      reactionGroups {
        ...Reactions_ReactionGroup
      }
      author {
        ...Author_Actor
      }
    }
  `,
    translator: (issue) => {
        var _a, _b, _c;
        return {
            id: issue.id,
            body: issue.body,
            createdAt: issue.createdAt.toString(),
            lastEditedAt: (_b = (_a = issue.lastEditedAt) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : null,
            isMinimized: issue.isMinimized,
            minimizedReason: (_c = issue.minimizedReason) !== null && _c !== void 0 ? _c : null,
            author: Author_1.Author.translate(issue.author),
            reactions: Reactions_1.Reactions.translate(issue.reactionGroups),
            totalReactions: issue.reactions.totalCount,
        };
    },
});
