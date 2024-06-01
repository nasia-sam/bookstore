import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { Book } from "../types/entities/Book";
import { BookInput } from "../types/inputTypes/bookInput";
import { em } from "../utils/entity-manager";

@Resolver(Book)
export class BookResolver {
  @Query(() => [Book])
  async getAllBooks(): Promise<Book[]> {
    return await em.find(Book, {}, { populate: ["author", "rentals"] });
  }

  @Mutation(() => Book)
  async createBook(@Arg("data") data: BookInput): Promise<Book> {
    const book = em.create(Book, data);
    await em.persistAndFlush(book);

    return book;
  }
}
