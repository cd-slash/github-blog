"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reactions = exports.Reaction = void 0;
const code_tag_1 = require("code-tag");
const datatype_1 = require("../core/datatype");
var Reaction;
(function (Reaction) {
    Reaction["ThumbsUp"] = "THUMBS_UP";
    Reaction["ThumbsDown"] = "THUMBS_DOWN";
    Reaction["Laugh"] = "LAUGH";
    Reaction["Smile"] = "LAUGH";
    Reaction["Hooray"] = "HOORAY";
    Reaction["Tada"] = "HOORAY";
    Reaction["Confused"] = "CONFUSED";
    Reaction["Heart"] = "HEART";
    Reaction["Rocket"] = "ROCKET";
    Reaction["Eyes"] = "EYES";
})(Reaction || (exports.Reaction = Reaction = {}));
exports.Reactions = (0, datatype_1.createDataType)({
    fragment: (0, code_tag_1.gql) `
    fragment Reactions_ReactionGroup on ReactionGroup {
      content
      users {
        totalCount
      }
    }
  `,
    translator: (reactionGroups) => {
        return (reactionGroups !== null && reactionGroups !== void 0 ? reactionGroups : []).reduce((acc, curr) => {
            var _a;
            return (Object.assign(Object.assign({}, acc), { [curr.content]: (_a = curr.users) === null || _a === void 0 ? void 0 : _a.totalCount }));
        }, {});
    },
    fallback: {
        THUMBS_UP: 0,
        THUMBS_DOWN: 0,
        LAUGH: 0,
        HOORAY: 0,
        CONFUSED: 0,
        HEART: 0,
        ROCKET: 0,
        EYES: 0,
    },
});
