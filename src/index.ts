import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from 'type-graphql'
import { AuthorResolver } from "./resolvers/AuthorResolver";

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  // ... Build GraphQL schema
  const schema = await buildSchema({
    resolvers: [AuthorResolver],
  });

  // Create GraphQL server
  const server = new ApolloServer({ schema });

  // Start server
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
  console.log(`GraphQL server ready at ${url}`);
}

bootstrap();
