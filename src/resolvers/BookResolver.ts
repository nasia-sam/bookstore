import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Book } from "../types/entities/Book";
import db from "../../db";
import { BookInput } from "../types/inputTypes/bookInput";
import { Author } from "../types/entities/Author";

@Resolver(Book)
export class BookResolver {
  @Query(() => [Book])
  getAllBooks(): Book[] {
    return db.books
  }

  @Mutation(() => Book)
  createBook(
    @Arg('data') data: BookInput
  ): Book {
    const book: Book = {id: 2, title: data.title, releasedAt: data.realeasedDate, author: { id: data.authorId } as  Author }
    db.books.push(book)
    return book
  }
}
