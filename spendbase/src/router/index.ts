import express, { IRouter, Router } from "express";
import routes from "router/routes";
import { Method } from "router/types";

type RouterMethod = keyof Pick<IRouter, "all">;

function createRouter(app: express.Application): void {
  const mainRouter = Router();

  for (let route of routes) {
    if (!Object.values(Method).includes(route.method)) {
      throw new Error("Wrong api method");
    }
    const curMethod = route.method.toLowerCase() as RouterMethod;
    mainRouter[curMethod](route.path, ...route.middlewares, route.controller);
  }

  app.use("/api", mainRouter);
}

export default createRouter;
