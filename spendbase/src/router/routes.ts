import { PathName } from "constants/pathNames";
import AuthController from "controller/auth";
import ParserController from "controller/parser";
import { checkAuth } from "middleware/checkAuth";
import { Method, type Route } from "router/types";

const routes: Route[] = [
  {
    path: PathName.PARSE,
    method: Method.GET,
    controller: ParserController.parse,
    middlewares: [checkAuth],
  },
  {
    path: PathName.PARSE_REQUEST,
    method: Method.GET,
    controller: ParserController.listRequests,
    middlewares: [],
  },
  {
    path: PathName.LOGIN,
    method: Method.POST,
    controller: AuthController.login,
    middlewares: [],
  },
  {
    path: PathName.SIGN_UP,
    method: Method.POST,
    controller: AuthController.register,
    middlewares: [],
  },
  {
    path: PathName.REFRESH,
    method: Method.POST,
    controller: AuthController.refresh,
    middlewares: [],
  },
  {
    path: PathName.LOGOUT,
    method: Method.GET,
    controller: AuthController.logout,
    middlewares: [checkAuth],
  },
];

export default routes;
