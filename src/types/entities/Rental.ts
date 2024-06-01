import { Field, ID, ObjectType } from "type-graphql";
import {
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
  Unique,
} from "@mikro-orm/core";
import { v4 } from "uuid";

import { Book } from "./Book";
import { User } from "./User";

@ObjectType()
@Entity()
export class Rental {
  @Field(() => ID)
  @PrimaryKey()
  id: string = v4();

  @Field()
  @Property()
  from: Date;

  @Field({ nullable: true })
  @Property({ nullable: true })
  to?: Date;

  @Field({ nullable: true })
  @Property({ nullable: true })
  review?: number;

  @Field(() => User)
  @ManyToOne(() => User)
  user: User;

  @Field(() => Book)
  @ManyToOne(() => Book)
  book: Book;
}
