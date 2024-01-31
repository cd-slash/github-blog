export type PagerParams = {
  before?: string;
  after?: string;
  first?: number;
  last?: number;
  limit?: number;
  offset?: number;
};
export declare const buildPager: (
  _args?: PagerParams | undefined,
  _defaults?: Partial<PagerParams> | undefined
) => Omit<PagerParams, "offset">;
