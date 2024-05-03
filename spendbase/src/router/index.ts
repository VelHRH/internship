import { PathName } from "constants/pathNames";
import express, { IRouter, Router } from "express";
import routes from "router/routes";
import { Method } from "router/types";
import ApiError from "utils/error/ApiError";

type RouterMethod = keyof Pick<IRouter, "all">;

function createRouter(app: express.Application): void {
  const mainRouter = Router();

  for (let route of routes) {
    if (!Object.values(Method).includes(route.method)) {
      throw ApiError.wrongMethod();
    }
    const curMethod = route.method.toLowerCase() as RouterMethod;
    mainRouter[curMethod](route.path, ...route.middlewares, route.controller);
  }

  app.use(PathName.API_PREFIX, mainRouter);
}

export default createRouter;
