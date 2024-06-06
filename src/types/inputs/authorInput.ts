import { Field, InputType } from "type-graphql";

@InputType()
export class AuthorInput {
  @Field()
  name: string;

  @Field()
  publisher?: string;
}
