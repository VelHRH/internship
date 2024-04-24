import express from 'express';
import { Method } from 'calc-types';

type Route = {
  path: string;
  method: Method;
  controller: express.RequestHandler;
  middlewares: express.RequestHandler[];
};

export { Route };
