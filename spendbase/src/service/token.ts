import { db } from "db";
import { user, userTable, type UserWithoutPassword } from "db/schema";
import "dotenv/config";
import { eq } from "drizzle-orm";
import ApiError from "error/ApiError";
import jwt from "jsonwebtoken";

const refresh = async (refreshToken?: string) => {
  if (!refreshToken) {
    throw ApiError.unauthorised();
  }
  const tokenUser = jwt.verify(
    refreshToken,
    String(process.env.REFRESH_TOKEN_SECRET)
  ) as UserWithoutPassword;
  const dbUser = (
    await db.select(user).from(userTable).where(eq(userTable.id, tokenUser.id))
  )[0];
  if (dbUser?.refreshToken !== refreshToken) {
    throw ApiError.unauthorised();
  }
  const tokens = createTokens(dbUser);
  await updateRefreshToken(dbUser.id, tokens.refreshToken);
  return tokens;
};

const updateRefreshToken = async (userId: number, refreshToken: string) => {
  await db.update(userTable).set({ refreshToken }).where(eq(user.id, userId));
};

const createTokens = (payload: UserWithoutPassword) => {
  const accessToken = create({
    payload,
    secret: String(process.env.ACCESS_TOKEN_SECRET),
    expiresIn: "15s",
  }); //TODO: tokenDuration const
  const refreshToken = create({
    payload,
    secret: String(process.env.REFRESH_TOKEN_SECRET),
    expiresIn: "1d",
  });
  return { accessToken, refreshToken };
};

type CreateToken = {
  payload: UserWithoutPassword;
  expiresIn: string | number;
  secret: string;
};

const create = ({ payload, expiresIn, secret }: CreateToken) => {
  return jwt.sign(payload, secret, { expiresIn });
};

export default {
  updateRefreshToken,
  createTokens,
  create,
  refresh,
};
