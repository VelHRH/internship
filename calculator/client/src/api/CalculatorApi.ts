import type { CalculationResult } from 'calc-types';
import HttpWrapper from 'api/HttpWrapper';
import ApiRoute from 'api/apiRoutes';

class CalculatorApi extends HttpWrapper {
  constructor() {
    super(import.meta.env.VITE_API_URL);
  }

  public calculate(expression: string) {
    return this.post<CalculationResult>(ApiRoute.CALCULATE, {
      expression,
    });
  }
}

export default new CalculatorApi();
