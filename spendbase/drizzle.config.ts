import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DB_CONNECTION_STRING as string,
  },
  verbose: true,
  strict: true,
} satisfies Config;
