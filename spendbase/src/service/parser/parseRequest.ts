import { CustomError } from "constants/errors";
import { db } from "db";
import { parseRequestTable, userTable } from "db/schema";
import { eq } from "drizzle-orm";
import ApiError from "utils/error/ApiError";

const create = async (userId: number) => {
  const result = await db
    .insert(parseRequestTable)
    .values({ userId })
    .returning();
  if (!result.length) {
    throw ApiError.internal(CustomError.UPDATE_REQUESTS);
  }
};

const list = async () => {
  const requestsList = await db
    .select({ time: parseRequestTable.createdAt, user: userTable.email })
    .from(parseRequestTable)
    .leftJoin(userTable, eq(parseRequestTable.userId, userTable.id));
  if (!requestsList.length) {
    throw ApiError.internal(CustomError.GET_REQUESTS);
  }
  return requestsList;
};

export default { create, list };
