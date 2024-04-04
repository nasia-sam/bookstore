import { defineConfig } from "@mikro-orm/core";
import { SqliteDriver } from "@mikro-orm/sqlite";

export default defineConfig({
  driver: SqliteDriver,
  dbName: "bookstore.db",
  debug: true,
  entities: ["./src/types/entities/*.ts"],
});
