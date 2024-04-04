import { Field, ID, ObjectType } from "type-graphql";
import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 } from "uuid";

import { Author } from "./Author";

@ObjectType()
@Entity()
export class Book {
  @Field(() => ID)
  @PrimaryKey()
  id: string = v4();

  @Field()
  @Property()
  title: string;

  @Field()
  @Property()
  releasedAt: Date;

  @Field(() => Author)
  @ManyToOne(() => Author)
  author: Author;
}
