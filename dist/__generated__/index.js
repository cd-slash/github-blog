"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.GetPostsDocument = exports.GetPostByIdDocument = exports.GetPostDocument = exports.GetPinnedPostsDocument = exports.GetLabelsDocument = exports.GetCommentsDocument = exports.PostReduced_IssueFragmentDoc = exports.Post_IssueFragmentDoc = exports.Labels_LabelConnectionFragmentDoc = exports.PageInfo_PageInfoFragmentDoc = exports.Label_LabelFragmentDoc = exports.Comment_IssueCommentFragmentDoc = exports.Author_ActorFragmentDoc = exports.Reactions_ReactionGroupFragmentDoc = void 0;
exports.Reactions_ReactionGroupFragmentDoc = `
    fragment Reactions_ReactionGroup on ReactionGroup {
  content
  users {
    totalCount
  }
}
    `;
exports.Author_ActorFragmentDoc = `
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
    `;
exports.Comment_IssueCommentFragmentDoc = `
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
    `;
exports.Label_LabelFragmentDoc = `
    fragment Label_Label on Label {
  id
  name
  color
  issues {
    totalCount
  }
}
    `;
exports.PageInfo_PageInfoFragmentDoc = `
    fragment PageInfo_PageInfo on PageInfo {
  endCursor
  startCursor
  hasNextPage
  hasPreviousPage
}
    `;
exports.Labels_LabelConnectionFragmentDoc = `
    fragment Labels_LabelConnection on LabelConnection {
  nodes {
    name
  }
}
    `;
exports.Post_IssueFragmentDoc = `
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
    `;
exports.PostReduced_IssueFragmentDoc = `
    fragment PostReduced_Issue on Issue {
  ...Post_Issue
}
    `;
exports.GetCommentsDocument = `
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
    ${exports.PageInfo_PageInfoFragmentDoc}
${exports.Comment_IssueCommentFragmentDoc}
${exports.Reactions_ReactionGroupFragmentDoc}
${exports.Author_ActorFragmentDoc}`;
exports.GetLabelsDocument = `
    query GetLabels($query: String, $name: String!, $owner: String!, $first: Int, $last: Int, $before: String, $after: String) {
  repository(name: $name, owner: $owner) {
    labels(
      query: $query
      first: $first
      last: $last
      before: $before
      after: $after
    ) {
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
    ${exports.PageInfo_PageInfoFragmentDoc}
${exports.Label_LabelFragmentDoc}`;
exports.GetPinnedPostsDocument = `
    query GetPinnedPosts($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    pinnedIssues(first: 3) {
      nodes {
        pinnedBy {
          ...Author_Actor
        }
        issue {
          ...Post_Issue
        }
      }
    }
  }
}
    ${exports.Author_ActorFragmentDoc}
${exports.Post_IssueFragmentDoc}
${exports.Reactions_ReactionGroupFragmentDoc}
${exports.Labels_LabelConnectionFragmentDoc}`;
exports.GetPostDocument = `
    query GetPost($query: String!) {
  search(first: 1, type: ISSUE, query: $query) {
    nodes {
      ... on Issue {
        ...Post_Issue
      }
    }
  }
}
    ${exports.Post_IssueFragmentDoc}
${exports.Author_ActorFragmentDoc}
${exports.Reactions_ReactionGroupFragmentDoc}
${exports.Labels_LabelConnectionFragmentDoc}`;
exports.GetPostByIdDocument = `
    query GetPostById($owner: String!, $name: String!, $number: Int!) {
  repository(owner: $owner, name: $name) {
    issue(number: $number) {
      ...Post_Issue
    }
  }
}
    ${exports.Post_IssueFragmentDoc}
${exports.Author_ActorFragmentDoc}
${exports.Reactions_ReactionGroupFragmentDoc}
${exports.Labels_LabelConnectionFragmentDoc}`;
exports.GetPostsDocument = `
    query GetPosts($query: String!, $first: Int, $last: Int, $before: String, $after: String) {
  search(
    query: $query
    first: $first
    last: $last
    before: $before
    after: $after
    type: ISSUE
  ) {
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
    ${exports.Post_IssueFragmentDoc}
${exports.Author_ActorFragmentDoc}
${exports.Reactions_ReactionGroupFragmentDoc}
${exports.Labels_LabelConnectionFragmentDoc}`;
function getSdk(requester) {
    return {
        GetComments(variables, options) {
            return requester(exports.GetCommentsDocument, variables, options);
        },
        GetLabels(variables, options) {
            return requester(exports.GetLabelsDocument, variables, options);
        },
        GetPinnedPosts(variables, options) {
            return requester(exports.GetPinnedPostsDocument, variables, options);
        },
        GetPost(variables, options) {
            return requester(exports.GetPostDocument, variables, options);
        },
        GetPostById(variables, options) {
            return requester(exports.GetPostByIdDocument, variables, options);
        },
        GetPosts(variables, options) {
            return requester(exports.GetPostsDocument, variables, options);
        }
    };
}
exports.getSdk = getSdk;
