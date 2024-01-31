import { Post } from "./Post";
type PostReduced = Omit<typeof Post.Type, "body">;
export declare const PostReduced: {
  fragment?: string | undefined;
  Type: PostReduced;
  FallbackType: PostReduced;
  OutputType: PostReduced;
  InputType: import("../__generated__").Post_IssueFragment;
  translate: (
    input: import("../__generated__").Post_IssueFragment | null | undefined
  ) => PostReduced;
};
export {};
