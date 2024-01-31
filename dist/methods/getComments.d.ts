import type { GithubBlog } from "../github-blog";
import { GithubQueryParams } from "../utils/github-query";
import { PagerParams } from "../utils/pager";
export type GetCommentsParams = {
  query?: GithubQueryParams;
  /**
   * Pagination with limit and offset don't work in comments. Use cursor pagination
   */
  pager?: Omit<PagerParams, "limit" | "offset">;
};
export declare const getComments: (blog: GithubBlog) => (params: GetCommentsParams) => Promise<{
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
export type GetComments = ReturnType<typeof getComments>;
export type GetCommentsResult = Awaited<ReturnType<GetComments>>;
