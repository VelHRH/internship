import { publicProcedure, router } from 'trpc';
import FunctionOperators from 'config/FunctionOperators';
import Operators from 'config/Operators';
import SpecialSymbols from 'config/SpecialSymbols';
import CalculatorService from 'calculator/CalculatorService';
import { z } from 'zod';

const calculatorRouter = router({
  getConfig: publicProcedure.query(() => ({ SpecialSymbols, Operators, FunctionOperators })),
  calculate: publicProcedure
    .input(z.string())
    .mutation(opts => CalculatorService.calculate(opts.input)),
});

export default calculatorRouter;
