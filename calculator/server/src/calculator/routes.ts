import { Method } from 'calc-types';
import { Route } from 'router/types';
import CalculatorController from './CalculatorController';
import validateExpression from 'middleware/expressionValidator';

const calculatorRoutes: Route[] = [
  {
    path: '/calculate',
    method: Method.POST,
    controller: CalculatorController.calculate,
    middlewares: [validateExpression],
  },
];

export default calculatorRoutes;
