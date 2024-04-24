import { FC, PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import type { CalculationResult } from 'calc-types';

import CalculatorApi from 'api/CalculatorApi';
import requestError from 'helpers/requestError';
import type { CalculatorCtx } from 'context/types/calculate';
import { HistoryContext } from './HistoryProvider';
import { CalculatorInputContext } from './CalculatorInputProvider';
import useError from 'hooks/useError';

export const CalculatorContext = createContext({} as CalculatorCtx);

interface CalculatorProviderProps extends PropsWithChildren {}

export const CalculatorProvider: FC<CalculatorProviderProps> = ({ children }) => {
  const [calculateResult, setCalculateResult] = useState<CalculationResult>();
  const { error: calculateError, setError: setCalculateError } = useError();
  const { addOneRecord, resultByExpression } = useContext(HistoryContext);
  const { setInputValue } = useContext(CalculatorInputContext);

  useEffect(() => {
    if (!calculateResult) return;
    setCalculateError('');
    setInputValue(calculateResult.expression);
    addOneRecord(calculateResult);
  }, [calculateResult]);

  useEffect(() => {
    if (!calculateError) return;
    setCalculateResult(undefined);
  }, [calculateError]);

  const calculate = async (expression: string): Promise<void> => {
    const existing = resultByExpression(expression);
    if (existing) {
      setCalculateResult({ expression, result: existing });
      return;
    }
    try {
      const data = await CalculatorApi.calculate(expression);
      setCalculateResult(data);
    } catch (err) {
      setCalculateError(requestError(err));
    }
  };
  const value = { calculateResult, calculateError, calculate, setCalculateResult };
  return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>;
};
