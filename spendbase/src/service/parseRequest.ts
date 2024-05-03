import { db } from "db";
import { parseRequestTable, userTable } from "db/schema";
import { eq } from "drizzle-orm";

const create = async (userId: number) => {
  await db.insert(parseRequestTable).values({ userId });
  // TODO: check insert error
};

const list = async () => {
  return await db
    .select({ time: parseRequestTable.createdAt, user: userTable.email })
    .from(parseRequestTable)
    .leftJoin(userTable, eq(parseRequestTable.userId, userTable.id));
};

export default { create, list };
