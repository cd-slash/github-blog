import { PageInfo_PageInfoFragment } from "../types";
type PageInfo = {
  endCursor?: string;
  startCursor?: string;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
};
export declare const PageInfo: {
  fragment?: string | undefined;
  Type: PageInfo;
  FallbackType: PageInfo;
  OutputType: PageInfo;
  InputType: PageInfo_PageInfoFragment;
  translate: (input: PageInfo_PageInfoFragment | null | undefined) => PageInfo;
};
export {};
