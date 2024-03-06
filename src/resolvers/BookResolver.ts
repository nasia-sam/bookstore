import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Book } from "../types/entities/Book";
import db from "../../db";
import { BookInput } from "../types/inputTypes/bookInput";
import { Author } from "../types/entities/Author";
import { em } from "../utils/entityManager";

@Resolver(Book)
export class BookResolver {
  @Query(() => [Book])
  async getAllBooks(): Promise<Book[]> {
    return await em.find(Book, {}, { populate: ['author']})
  }

  @Mutation(() => Book)
  async createBook(
    @Arg('data') data: BookInput
  ): Promise<Book> {
    const book = em.create('Book', data) as Book
    await em.persistAndFlush(book)

    return book
  }
}
