import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Field, ID, ObjectType } from "type-graphql";
import { v4 } from "uuid";

import { Book } from "./Book";

@ObjectType()
@Entity()
export class Author {
  @Field(() => ID)
  @PrimaryKey()
  id: string = v4();

  @Field()
  @Property()
  name: string;

  @Field({ nullable: true })
  @Property()
  publisher?: string;

  @Field(() => [Book])
  @OneToMany(() => Book, (books) => books.author)
  books = new Collection<Book>(this);
}
