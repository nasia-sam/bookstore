import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";

import { initORMConnection } from "./utils/entity-manager";

// resolvers
import { AuthorResolver } from "./resolvers/AuthorResolver";
import { BookResolver } from "./resolvers/BookResolver";
import { RentalResolver } from "./resolvers/RentalResolver";

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  // initiate orm
  await initORMConnection();

  // ... Build GraphQL schema
  const schema = await buildSchema({
    resolvers: [AuthorResolver, BookResolver, RentalResolver],
    validate: true,
  });

  // Create GraphQL server
  const server = new ApolloServer({ schema });

  // Start server
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`GraphQL server ready at ${url}`);
}

bootstrap();
