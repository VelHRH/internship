import * as schema from "db/schema";
import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DB_CONNECTION_STRING as string;
const client = postgres(connectionString, { max: 1 });
export const db = drizzle(client, { schema });
