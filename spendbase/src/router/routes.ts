import AuthController from "controller/auth";
import ParserController from "controller/parser";
import { checkAuth } from "middleware/checkAuth";
import { Method, type Route } from "router/types";

const routes: Route[] = [
  {
    path: "/parse",
    method: Method.GET,
    controller: ParserController.parse,
    middlewares: [checkAuth],
  },
  {
    path: "/auth/login",
    method: Method.POST,
    controller: AuthController.login,
    middlewares: [],
  },
  {
    path: "/auth/sign-up",
    method: Method.POST,
    controller: AuthController.register,
    middlewares: [],
  },
  {
    path: "/auth/refresh",
    method: Method.POST,
    controller: AuthController.refresh,
    middlewares: [],
  },
  {
    path: "/auth/logout",
    method: Method.POST,
    controller: AuthController.logout,
    middlewares: [checkAuth],
  },
];

export default routes;
