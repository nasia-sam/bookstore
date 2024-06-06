import "reflect-metadata";

import * as express from "express";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { expressMiddleware } from "@apollo/server/express4";

import { initORMConnection } from "./utils/entity-manager";
import { AuthorResolver, BookResolver, RentalResolver } from "./resolvers";

const PORT = parseInt(process.env.PORT || "4000");

async function bootstrap() {
  // create express app
  const app = express();

  // initiate orm
  await initORMConnection();

  // ... Build GraphQL schema
  const schema = await buildSchema({
    resolvers: [AuthorResolver, BookResolver, RentalResolver],
    validate: true,
  });

  // Create GraphQL server
  const apolloServer = new ApolloServer({ schema });
  await apolloServer.start();

  app.use(express.json());

  app.use("/graphql", expressMiddleware(apolloServer));

  app.listen(PORT, () =>
    console.log(`GraphQL server ready at http://localhost:${PORT}/graphql`)
  );
}

bootstrap();
