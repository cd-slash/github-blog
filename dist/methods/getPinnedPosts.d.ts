import type { GithubBlog } from "../github-blog";
export type GetPinnedPostsParams = never;
export declare const getPinnedPosts: (blog: GithubBlog) => () => Promise<{
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
export type GetPinnedPosts = ReturnType<typeof getPinnedPosts>;
export type GetPinnedPostsResult = Awaited<ReturnType<GetPinnedPosts>>;
