import { Field, Float, ID, ObjectType, Root } from "type-graphql";
import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { v4 } from "uuid";

import { Author } from "./Author";
import { Rental } from "./Rental";

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

  @Field(() => [Rental])
  @OneToMany(() => Rental, (rental) => rental.book)
  rentals = new Collection<Rental>(this);

  @Field(() => Float)
  rating(@Root() book: Book) {
    const ratings = book.rentals.getItems().filter((rental) => rental.review);

    return ratings.length === 0
      ? 0
      : ratings.reduce((a, b) => a + b.review, 0) / ratings.length;
  }
}
