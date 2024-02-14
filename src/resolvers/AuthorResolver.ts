import { Query, Resolver } from "type-graphql";
import { Author } from "../types/entities/Author";
import db from '../../db'

@Resolver(Author)
export class AuthorResolver {
  @Query(() => [Author])
  fetchAllAuthors(): Author[] {
    return db.authors
  }
}
