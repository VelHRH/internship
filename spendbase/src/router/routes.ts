import ParserController from "controller/parser";
import { Method, type Route } from "router/types";

const routes: Route[] = [
  {
    path: "/parse",
    method: Method.GET,
    controller: ParserController.parse,
    middlewares: [],
  },
];

export default routes;
