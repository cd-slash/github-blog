import { Author_ActorFragment } from "../types";
type Author = {
  avatarUrl: string | null;
  name: string;
  login: string | null;
  twitterUsername: string | null;
};
export declare const Author: {
  fragment?: string | undefined;
  Type: Author;
  FallbackType: Author;
  OutputType: Author;
  InputType: Author_ActorFragment;
  translate: (input: Author_ActorFragment | null | undefined) => Author;
};
export {};
