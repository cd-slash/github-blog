import { Post_IssueFragment } from "../types";
import { Reactions } from "./Reactions";
import { Labels } from "./Labels";
import { Author } from "./Author";
type Post = {
  url: string;
  updatedAt: string;
  createdAt: string;
  title: string;
  author: typeof Author.Type;
  body: string;
  frontmatter: {
    [key: string]: string;
  };
  labels: typeof Labels.Type;
  reactions: typeof Reactions.Type;
  totalComments: number;
  totalReactions: number;
};
export declare const Post: {
  fragment?: string | undefined;
  Type: Post;
  FallbackType: Post;
  OutputType: Post;
  InputType: Post_IssueFragment;
  translate: (input: Post_IssueFragment | null | undefined) => Post;
};
export {};
