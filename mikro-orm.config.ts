import { defineConfig } from "@mikro-orm/core"
import { MySqlDriver } from '@mikro-orm/mysql';
import { Migrator } from '@mikro-orm/migrations';

const DB_PASSWORD = process.env.DB_PASSWORD as string ?? 'root'

export default defineConfig ({
  driver: MySqlDriver,
  dbName: 'bookstore-db',
  host: '127.0.0.1',
  port: 3336,
  user: process.env.DB_USER,
  password: DB_PASSWORD,
  debug: true,
  entities: [
    './src/types/entities/*.ts'
  ],
  extensions: [Migrator],
})
