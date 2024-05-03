import type { RequestHandler } from "controller/types";
import type { UserWithoutPassword } from "db/schema";
import "dotenv/config";
import jwt from "jsonwebtoken";
import ApiError from "utils/error/ApiError";

export interface AuthRequest extends Request {
  user: UserWithoutPassword;
}

export const checkAuth: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    throw ApiError.unauthorized();
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err, payloadData) => {
    if (err) {
      throw ApiError.unauthorized();
    }
    const user = payloadData as UserWithoutPassword;
    (req as unknown as AuthRequest).user = user;
    next();
  });
};
