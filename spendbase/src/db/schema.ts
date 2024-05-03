import { getTableColumns } from "drizzle-orm";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm/table";

export const userTable = pgTable("user", {
  id: serial("id"),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  refreshToken: text("refreshToken"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

const { password, ...user } = getTableColumns(userTable);

export { user };
export type User = InferSelectModel<typeof userTable>;
export type NewUser = InferInsertModel<typeof userTable>;
export type UserWithoutPassword = Omit<User, "password">;
