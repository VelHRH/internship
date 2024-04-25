import { router } from 'trpc';
import calculatorRouter from './calculatorRouter';

const appRouter = router({
  calculator: calculatorRouter,
});

export default appRouter;
export type AppRouter = typeof appRouter;
