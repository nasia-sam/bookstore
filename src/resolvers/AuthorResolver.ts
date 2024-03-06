import { Query, Resolver } from "type-graphql";
import { Author } from "../types/entities/Author";
import db from '../../db'
import { em } from "../utils/entityManager";

@Resolver(Author)
export class AuthorResolver {
  @Query(() => [Author])
  async fetchAllAuthors(): Promise<Author[]> {
    return await em.find('Author', {})
  }
}
