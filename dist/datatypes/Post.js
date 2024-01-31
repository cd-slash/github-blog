"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const code_tag_1 = require("code-tag");
const datatype_1 = require("../core/datatype");
const frontmatter_1 = require("../utils/frontmatter");
const Reactions_1 = require("./Reactions");
const Labels_1 = require("./Labels");
const Author_1 = require("./Author");
exports.Post = (0, datatype_1.createDataType)({
    fragment: (0, code_tag_1.gql) `
    fragment Post_Issue on Issue {
      id
      url
      updatedAt
      createdAt
      title
      body
      author {
        ...Author_Actor
      }
      reactionGroups {
        ...Reactions_ReactionGroup
      }
      labels(first: 100) {
        ...Labels_LabelConnection
      }
      comments {
        totalCount
      }
      reactions {
        totalCount
      }
    }
  `,
    translator: (issue) => {
        const { data, content } = (0, frontmatter_1.frontmatter)(issue.body);
        return {
            id: issue.id,
            url: issue.url,
            updatedAt: issue.updatedAt,
            createdAt: issue.createdAt,
            frontmatter: data,
            body: content,
            title: issue.title,
            author: Author_1.Author.translate(issue.author),
            labels: Labels_1.Labels.translate(issue.labels),
            totalComments: issue.comments.totalCount,
            reactions: Reactions_1.Reactions.translate(issue.reactionGroups),
            totalReactions: issue.reactions.totalCount,
        };
    },
});
