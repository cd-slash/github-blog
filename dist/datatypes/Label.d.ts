import { Label_LabelFragment } from "../types";
type Label = {
  id: string;
  name: string;
  prefix: string;
  fullName: string;
  color: string;
  quantity: number;
};
export declare const Label: {
  fragment?: string | undefined;
  Type: Label;
  FallbackType: Label;
  OutputType: Label;
  InputType: Label_LabelFragment;
  translate: (input: Label_LabelFragment | null | undefined) => Label;
};
export {};
