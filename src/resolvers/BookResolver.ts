import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";

import { Book } from "../types/entities/Book";
import { BookInput } from "../types/inputs/bookInput";
import { em } from "../utils/entity-manager";

@Resolver(Book)
export class BookResolver {
  @Query(() => [Book])
  async getAllBooks(): Promise<Book[]> {
    return await em.find(
      Book,
      {},
      { populate: ["author", "rentals", "rentals.user"] }
    );
  }

  @Mutation(() => Book)
  async createBook(@Arg("data") data: BookInput): Promise<Book> {
    const book = em.create(Book, data);
    await em.persistAndFlush(book);

    return book;
  }

  @FieldResolver(() => Boolean)
  available(@Root() book: Book) {
    const rented = book.rentals.getItems().find((rental) => rental.to === null);

    return !rented;
  }
}
