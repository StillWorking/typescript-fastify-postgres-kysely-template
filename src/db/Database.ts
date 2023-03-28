import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { Schema } from "./schema/Schema";
import * as dotenv from 'dotenv'

dotenv.config()

export const db = new Kysely<Schema>({
    dialect: new PostgresDialect({
        pool: new Pool({
            connectionString: process.env.DATABASE_URL,
        }),
    }),
});