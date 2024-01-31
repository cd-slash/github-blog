import { gql } from "code-tag";
type Or<Type, Or> = Type | Or;
type Maybe<Type> = Or<Type, null | undefined>;
type TranslatorType<Input, Output> = (input: Input) => Output;
export declare const createDataType: <
  Input,
  Output,
  Fallback extends Maybe<Partial<Output>> = Output
>(config: {
  fragment?: string | undefined;
  translator: TranslatorType<Input, Output>;
  fallback?: Fallback | undefined;
}) => {
  fragment?: string | undefined;
  Type: Or<Output, Fallback>;
  FallbackType: Fallback;
  OutputType: Output;
  InputType: Input;
  translate: TranslatorType<Maybe<Input>, Or<Output, Fallback>>;
};
export {};
