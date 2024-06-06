import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { Author } from "../types/entities/Author";
import { em } from "../utils/entity-manager";
import { AuthorInput } from "../types/inputs/authorInput";

@Resolver(Author)
export class AuthorResolver {
  @Query(() => [Author])
  async fetchAllAuthors(): Promise<Author[]> {
    return await em.find("Author", {});
  }

  @Mutation(() => Author)
  async createAuthor(@Arg("data") data: AuthorInput): Promise<Author> {
    const author = em.create(Author, data);
    await em.persistAndFlush(author);

    return author;
  }
}
