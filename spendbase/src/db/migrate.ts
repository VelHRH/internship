import { db } from "db";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const initMigrations = async () => {
  await migrate(db, { migrationsFolder: "src/db/migrations" });
  console.log("migrations complete");
};

initMigrations();
