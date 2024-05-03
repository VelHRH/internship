import type { RequestHandler } from "controller/types";
import type { AuthRequest } from "middleware/checkAuth";
import TokenService from "service/auth/token";
import UserService from "service/auth/user";
import { returnSuccess } from "utils/response";

const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.login(email, password);
    res.json(returnSuccess(user));
  } catch (err) {
    next(err);
  }
};

const register: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.create(email, password);
    res.json(returnSuccess(user));
  } catch (err) {
    next(err);
  }
};

const refresh: RequestHandler = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const tokens = await TokenService.refresh(refreshToken);
    res.json(returnSuccess(tokens));
  } catch (err) {
    next(err);
  }
};

const logout: RequestHandler = async (req, res, next) => {
  try {
    const { id } = (req as unknown as AuthRequest).user;
    await UserService.logout(id);
    res.json(returnSuccess({ success: true }));
  } catch (err) {
    next(err);
  }
};

export default { login, register, refresh, logout };
