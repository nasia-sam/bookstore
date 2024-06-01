import { Field, ObjectType } from "type-graphql";
import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
  Unique,
} from "@mikro-orm/core";
import { v4 } from "uuid";
import { Rental } from "./Rental";

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryKey()
  id: string = v4();

  @Field()
  @Property()
  @Unique()
  email: string;

  @Field()
  @Property()
  fullname: string;

  @Field(() => [Rental])
  @OneToMany(() => Rental, (rental) => rental.user)
  rentals = new Collection<Rental>(this);
}
