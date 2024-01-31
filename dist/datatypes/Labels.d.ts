import { Labels_LabelConnectionFragment } from "../types";
type Labels = {
  state?: string[];
  type?: string[];
  tag?: string[];
  flag?: string[];
  slug?: string[];
  [k: string]: string[] | undefined;
};
export declare const Labels: {
  fragment?: string | undefined;
  Type: Labels;
  FallbackType: Labels;
  OutputType: Labels;
  InputType: Labels_LabelConnectionFragment;
  translate: (input: Labels_LabelConnectionFragment | null | undefined) => Labels;
};
export {};
