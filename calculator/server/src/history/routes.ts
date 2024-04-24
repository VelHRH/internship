import { Route } from 'router/types';
import HistoryController from './HistoryController';
import { Method } from 'calc-types';

const historyRoutes: Route[] = [
  {
    path: '/history',
    method: Method.GET,
    controller: HistoryController.get,
    middlewares: [],
  },
  {
    path: '/history',
    method: Method.POST,
    controller: HistoryController.addRecord,
    middlewares: [],
  },
];

export default historyRoutes;
