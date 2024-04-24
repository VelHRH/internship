import { Method } from 'calc-types';
import { Route } from 'router/types';
import ConfigController from './ConfigController';

const configRoutes: Route[] = [
  {
    path: '/config',
    method: Method.GET,
    controller: ConfigController.get,
    middlewares: [],
  },
];

export default configRoutes;
