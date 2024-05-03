import bcrypt from "bcrypt";
import { db } from "db";
import { userTable } from "db/schema";
import "dotenv/config";
import { eq } from "drizzle-orm/sql/expressions";
import TokenService from "service/auth/token";
import ApiError from "utils/error/ApiError";

const login = async (email: string, pass: string) => {
  const result = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, email));
  if (result.length !== 1) {
    throw ApiError.badRequest("Wrong email or password");
  }
  const { password, ...user } = result[0];
  const isPasswordCorrect = await bcrypt.compare(pass, password);
  if (!isPasswordCorrect) {
    throw ApiError.badRequest("Wrong email or password");
  }
  const tokens = TokenService.createTokens(user);
  await TokenService.updateRefreshToken(user.id, tokens.refreshToken);
  return { ...user, ...tokens };
};

const create = async (email: string, pass: string) => {
  const SALT_ROUNDS = 10;
  const hashedPassword = await bcrypt.hash(pass, SALT_ROUNDS);
  const result = await db
    .insert(userTable)
    .values({ email, password: hashedPassword })
    .returning();

  if (result.length !== 1) {
    throw ApiError.badRequest("Failed to create this user");
  }
  const { password, ...safeUser } = result[0];
  return safeUser;
};

const logout = async (id: number) => {
  await db
    .update(userTable)
    .set({ refreshToken: null })
    .where(eq(userTable.id, id));
};

export default { login, create, logout };
