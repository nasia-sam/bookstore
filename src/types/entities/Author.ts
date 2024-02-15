import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
export class Author {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  publisher?: string;
}
