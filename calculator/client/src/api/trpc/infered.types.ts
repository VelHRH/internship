import { AppRouter } from '../../../../server/src/trpc/router';
import { inferRouterOutputs } from '@trpc/server';

type RouterOutput = inferRouterOutputs<AppRouter>;

type Config = RouterOutput['calculator']['getConfig'];
type SpecialSymbol = RouterOutput['calculator']['getConfig']['SpecialSymbols'];
type OperatorSymbol = RouterOutput['calculator']['getConfig']['Operators'];
type CalculateResponse = RouterOutput['calculator']['calculate'];

type BasicSymbol = SpecialSymbol[keyof SpecialSymbol];
type Operator = OperatorSymbol[keyof OperatorSymbol];

export type { Config, BasicSymbol, Operator, SpecialSymbol, CalculateResponse };
