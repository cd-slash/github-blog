import { Comment_IssueCommentFragment } from "../types";
import { Author } from "./Author";
import { Reactions } from "./Reactions";
type Comment = {
  id: string;
  body: string;
  createdAt: string;
  lastEditedAt: string | null;
  isMinimized: boolean;
  minimizedReason: string | null;
  author: typeof Author.Type;
  reactions: typeof Reactions.Type;
};
export declare const Comment: {
  fragment?: string | undefined;
  Type: Comment;
  FallbackType: Comment;
  OutputType: Comment;
  InputType: Comment_IssueCommentFragment;
  translate: (input: Comment_IssueCommentFragment | null | undefined) => Comment;
};
export {};
