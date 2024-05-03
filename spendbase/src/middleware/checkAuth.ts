import type { RequestHandler } from "controller/types";
import type { UserWithoutPassword } from "db/schema";
import "dotenv/config";
import ApiError from "error/ApiError";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user: UserWithoutPassword;
}

export const checkAuth: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    throw ApiError.unauthorised();
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err, payloadData) => {
    if (err) {
      throw ApiError.unauthorised();
    }
    const user = payloadData as UserWithoutPassword;
    (req as unknown as AuthRequest).user = user;
    next();
  });
};
