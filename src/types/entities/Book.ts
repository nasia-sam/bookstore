import { Field, ID, ObjectType } from "type-graphql";
import { Author } from "./Author";


@ObjectType()
export class Book {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  releasedAt: Date;

  @Field()
  author: Author;
}
