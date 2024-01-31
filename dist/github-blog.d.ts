import { GithubQueryParams, githubQueryBuilder } from "./utils/github-query";
import { PagerParams, buildPager } from "./utils/pager";
import { getSdk } from "./core/sdk";
export type GithubBlogParams = {
  token: string;
  repo: string;
  queryDefaults?: Partial<GithubQueryParams>;
  paginationDefaults?: Partial<PagerParams>;
};
export declare class GithubBlog {
  sdk: ReturnType<typeof getSdk>;
  repo: string;
  buildQuery: (args?: GithubQueryParams) => ReturnType<ReturnType<typeof githubQueryBuilder>>;
  buildPager: (args?: PagerParams) => ReturnType<typeof buildPager>;
  constructor(params: GithubBlogParams);
  getPosts: (params: import("./methods/getPosts").GetPostsParams) => Promise<{
    totalCount: number;
    pageInfo: {
      endCursor: string | null | undefined;
      startCursor: string | null | undefined;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
    edges: {
      cursor: string;
      post: {
        reactions: {
          THUMBS_UP: number;
          THUMBS_DOWN: number;
          LAUGH: number;
          HOORAY: number;
          CONFUSED: number;
          HEART: number;
          ROCKET: number;
          EYES: number;
        };
        author: {
          avatarUrl: string | null;
          name: string;
          login: string | null;
          twitterUsername: string | null;
        };
        url: string;
        updatedAt: string;
        createdAt: string;
        title: string;
        frontmatter: {
          [key: string]: string;
        };
        labels: {
          [k: string]: string[] | undefined;
          state?: string[] | undefined;
          type?: string[] | undefined;
          tag?: string[] | undefined;
          flag?: string[] | undefined;
          slug?: string[] | undefined;
        };
        totalComments: number;
        totalReactions: number;
      };
    }[];
  }>;
  getPost: (params: import("./methods/getPost").GetPostParams) => Promise<
    | {
        post: null;
      }
    | {
        post: {
          url: string;
          updatedAt: string;
          createdAt: string;
          title: string;
          author: {
            avatarUrl: string | null;
            name: string;
            login: string | null;
            twitterUsername: string | null;
          };
          body: string;
          frontmatter: {
            [key: string]: string;
          };
          labels: {
            [k: string]: string[] | undefined;
            state?: string[] | undefined;
            type?: string[] | undefined;
            tag?: string[] | undefined;
            flag?: string[] | undefined;
            slug?: string[] | undefined;
          };
          reactions: {
            THUMBS_UP: number;
            THUMBS_DOWN: number;
            LAUGH: number;
            HOORAY: number;
            CONFUSED: number;
            HEART: number;
            ROCKET: number;
            EYES: number;
          };
          totalComments: number;
          totalReactions: number;
        };
      }
  >;
  getPostById: () => Promise<
    | {
        post: null;
      }
    | {
        post: {
          url: string;
          updatedAt: string;
          createdAt: string;
          title: string;
          author: {
            avatarUrl: string | null;
            name: string;
            login: string | null;
            twitterUsername: string | null;
          };
          body: string;
          frontmatter: {
            [key: string]: string;
          };
          labels: {
            [k: string]: string[] | undefined;
            state?: string[] | undefined;
            type?: string[] | undefined;
            tag?: string[] | undefined;
            flag?: string[] | undefined;
            slug?: string[] | undefined;
          };
          reactions: {
            THUMBS_UP: number;
            THUMBS_DOWN: number;
            LAUGH: number;
            HOORAY: number;
            CONFUSED: number;
            HEART: number;
            ROCKET: number;
            EYES: number;
          };
          totalComments: number;
          totalReactions: number;
        };
      }
  >;
  getComments: (params: import("./methods/getComments").GetCommentsParams) => Promise<{
    totalCount: number;
    pageInfo: {
      endCursor?: string | undefined;
      startCursor?: string | undefined;
      hasNextPage?: boolean | undefined;
      hasPreviousPage?: boolean | undefined;
    };
    edges: {
      cursor: string;
      comment: {
        id: string;
        body: string;
        createdAt: string;
        lastEditedAt: string | null;
        isMinimized: boolean;
        minimizedReason: string | null;
        author: {
          avatarUrl: string | null;
          name: string;
          login: string | null;
          twitterUsername: string | null;
        };
        reactions: {
          THUMBS_UP: number;
          THUMBS_DOWN: number;
          LAUGH: number;
          HOORAY: number;
          CONFUSED: number;
          HEART: number;
          ROCKET: number;
          EYES: number;
        };
      };
    }[];
  }>;
  getLabels: (params?: import("./methods/getLabels").GetLabelsParams | undefined) => Promise<{
    totalCount: number;
    pageInfo: {
      endCursor?: string | undefined;
      startCursor?: string | undefined;
      hasNextPage?: boolean | undefined;
      hasPreviousPage?: boolean | undefined;
    };
    edges: {
      cursor: string;
      label: {
        id: string;
        name: string;
        prefix: string;
        fullName: string;
        color: string;
        quantity: number;
      };
    }[];
  }>;
  getPinnedPosts: () => Promise<{
    pinnedPosts: {
      pinnedBy: {
        avatarUrl: string | null;
        name: string;
        login: string | null;
        twitterUsername: string | null;
      };
      post: {
        reactions: {
          THUMBS_UP: number;
          THUMBS_DOWN: number;
          LAUGH: number;
          HOORAY: number;
          CONFUSED: number;
          HEART: number;
          ROCKET: number;
          EYES: number;
        };
        author: {
          avatarUrl: string | null;
          name: string;
          login: string | null;
          twitterUsername: string | null;
        };
        url: string;
        updatedAt: string;
        createdAt: string;
        title: string;
        frontmatter: {
          [key: string]: string;
        };
        labels: {
          [k: string]: string[] | undefined;
          state?: string[] | undefined;
          type?: string[] | undefined;
          tag?: string[] | undefined;
          flag?: string[] | undefined;
          slug?: string[] | undefined;
        };
        totalComments: number;
        totalReactions: number;
      };
    }[];
  }>;
}
