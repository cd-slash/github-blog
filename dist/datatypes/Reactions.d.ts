import { Reactions_ReactionGroupFragment } from "../types";
export declare enum Reaction {
  ThumbsUp = "THUMBS_UP",
  ThumbsDown = "THUMBS_DOWN",
  Laugh = "LAUGH",
  Smile = "LAUGH",
  Hooray = "HOORAY",
  Tada = "HOORAY",
  Confused = "CONFUSED",
  Heart = "HEART",
  Rocket = "ROCKET",
  Eyes = "EYES",
}
type Reactions = {
  THUMBS_UP: number;
  THUMBS_DOWN: number;
  LAUGH: number;
  HOORAY: number;
  CONFUSED: number;
  HEART: number;
  ROCKET: number;
  EYES: number;
};
type ReactionsInput = Reactions_ReactionGroupFragment[];
export declare const Reactions: {
  fragment?: string | undefined;
  Type: Reactions;
  FallbackType: Reactions;
  OutputType: Reactions;
  InputType: ReactionsInput;
  translate: (input: ReactionsInput | null | undefined) => Reactions;
};
export {};
