import type { GithubBlog } from "../github-blog";
import { GithubQueryParams } from "../utils/github-query";
import { PagerParams } from "../utils/pager";
export type GetPostsParams = {
  query?: GithubQueryParams;
  pager?: PagerParams;
};
export declare const getPosts: (blog: GithubBlog) => (params: GetPostsParams) => Promise<{
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
export type GetPosts = ReturnType<typeof getPosts>;
export type GetPostsResult = Awaited<ReturnType<GetPosts>>;
