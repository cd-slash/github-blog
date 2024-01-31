export type SortDescAsc = "interactions" | "reactions" | "author-date" | "created" | "updated";
export type SortReaction =
  | "reactions-+1"
  | "reactions--1"
  | "reactions-smile"
  | "reactions-tada"
  | "reactions-heart";
export type Sort = SortDescAsc | `${SortDescAsc}-asc` | `${SortDescAsc}-desc` | SortReaction;
export type GithubQueryParams = {
  tag?: string | string[];
  notTag?: string | string[];
  flag?: string | string[];
  notFlag?: string | string[];
  state?: string | string[];
  notState?: string | string[];
  type?: string | string[];
  notType?: string | string[];
  author?: string | string[];
  notAuthor?: string | string[];
  sort?: Sort;
  slug?: string;
  search?: string;
  overrides?: string;
};
export declare const githubQueryBuilder: (
  repo: string
) => (
  _args?: GithubQueryParams | undefined,
  _defaults?: Partial<GithubQueryParams> | undefined
) => string;
