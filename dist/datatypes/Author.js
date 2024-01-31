"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const code_tag_1 = require("code-tag");
const datatype_1 = require("../core/datatype");
exports.Author = (0, datatype_1.createDataType)({
    fragment: (0, code_tag_1.gql) `
    fragment Author_Actor on Actor {
      ... on User {
        avatarUrl
        name
        login
        twitterUsername
      }
      ... on Organization {
        avatarUrl
        name
        login
        twitterUsername
      }
      ... on EnterpriseUserAccount {
        avatarUrl
        name
        login
      }
      ... on Bot {
        avatarUrl
        login
      }
    }
  `,
    translator: (actor) => {
        var _a;
        return {
            avatarUrl: "avatarUrl" in actor ? actor.avatarUrl : null,
            login: "login" in actor ? actor.login : null,
            name: "name" in actor && actor.name ? actor.name : "login" in actor ? actor.login : "Unknown",
            twitterUsername: "twitterUsername" in actor ? (_a = actor.twitterUsername) !== null && _a !== void 0 ? _a : null : null,
        };
    },
    fallback: {
        avatarUrl: null,
        login: null,
        name: "Unknown",
        twitterUsername: null,
    },
});
