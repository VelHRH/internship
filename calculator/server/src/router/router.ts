import express, { IRouter, Router } from 'express';

import ApiError from 'errors/ApiError';
import historyRoutes from 'history/routes';
import calculatorRoutes from 'calculator/routes';
import configRoutes from 'config/routes';
import { Method } from 'calc-types';

type RouterMethod = keyof Pick<IRouter, 'all'>;

function createRouter(app: express.Application): void {
  const mainRouter = Router();

  const routes = [...historyRoutes, ...calculatorRoutes, ...configRoutes];

  for (let route of routes) {
    if (!Object.values(Method).includes(route.method)) {
      throw ApiError.wrongMethod();
    }
    const curMethod = route.method.toLowerCase() as RouterMethod;
    mainRouter[curMethod](route.path, ...route.middlewares, route.controller);
  }

  app.use('/api', mainRouter);
}

export default createRouter;
