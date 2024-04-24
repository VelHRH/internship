import { Dispatch, SetStateAction } from 'react';
import type { CalculationResult } from 'calc-types';

interface CalculatorCtx {
  calculateResult?: CalculationResult;
  setCalculateResult: Dispatch<
    SetStateAction<
      | {
          expression: string;
          result: number;
        }
      | undefined
    >
  >;
  calculateError: string;
  calculate: (exp: string) => void;
}

export type { CalculatorCtx };
