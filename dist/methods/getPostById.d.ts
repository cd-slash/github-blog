import type { GithubBlog } from "../github-blog";
export type GetPostByIdParams = {
  number: number;
};
export declare const getPostById: (blog: GithubBlog) => () => Promise<
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
export type GetPostById = ReturnType<typeof getPostById>;
export type GetPostByIdResult = Awaited<ReturnType<GetPostById>>;
