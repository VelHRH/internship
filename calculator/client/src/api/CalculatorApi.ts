import type { CalculateResponse, Config } from './trpc/infered.types';
import { trpc } from './trpc/trpc';

class CalculatorApi {
  public calculate(expression: string): Promise<CalculateResponse> {
    return trpc.calculator.calculate.mutate(expression);
  }

  public getConfig(): Promise<Config> {
    return trpc.calculator.getConfig.query();
  }
}

export default new CalculatorApi();
