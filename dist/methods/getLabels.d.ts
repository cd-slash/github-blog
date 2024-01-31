import type { GithubBlog } from "../github-blog";
import { PagerParams } from "../utils/pager";
export type GetLabelsParams = {
  query?: string;
  pager?: PagerParams;
};
export declare const getLabels: (blog: GithubBlog) => (params?: GetLabelsParams) => Promise<{
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
export type GetLabels = ReturnType<typeof getLabels>;
export type GetLabelsResult = Awaited<ReturnType<GetLabels>>;
