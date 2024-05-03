import { getTableColumns, relations } from "drizzle-orm";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm/table";

export const userTable = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  refreshToken: text("refreshToken"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const userRelations = relations(userTable, ({ many }) => ({
  parseRequests: many(parseRequestTable),
}));

const { password, ...user } = getTableColumns(userTable);

export { user };
export type User = InferSelectModel<typeof userTable>;
export type NewUser = InferInsertModel<typeof userTable>;
export type UserWithoutPassword = Omit<User, "password">;

export const parseRequestTable = pgTable("parse_requests", {
  id: serial("id").primaryKey(),
  userId: serial("userId").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const parseRequestRelations = relations(
  parseRequestTable,
  ({ one }) => ({
    user: one(userTable, {
      fields: [parseRequestTable.userId],
      references: [userTable.id],
    }),
  })
);

export type ParsePequest = InferSelectModel<typeof parseRequestTable>;
export type NewParsePequest = InferInsertModel<typeof parseRequestTable>;
