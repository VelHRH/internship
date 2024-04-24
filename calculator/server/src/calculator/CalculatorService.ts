import type { CalculationResult } from 'calc-types';
import { toNumber } from 'calculator/utils/symbolHelpers';
import HistoryService from 'history/HistoryService';
import preprocessExpression from 'calculator/expression/preprocessExpression';
import computeExpression from 'calculator/expression/computeExpression';

async function calculateWithHistory(expression: string): Promise<CalculationResult> {
  let expressionCopy = preprocessExpression(expression);
  if (expressionCopy === '') {
    return prepareResult(expressionCopy, 0);
  }
  let historyResult = await HistoryService.getByExpression(expressionCopy);
  if (historyResult) {
    HistoryService.addExisting(expressionCopy);
    return prepareResult(expressionCopy, historyResult); // if preprocessed expression in history, immediately return
  }
  const value = toNumber(computeExpression(expressionCopy).toFixed(8));
  HistoryService.create(expressionCopy, value);
  return prepareResult(expressionCopy, value);
}

function prepareResult(expression: string, result: number): CalculationResult {
  return { expression, result };
}

export default { calculateWithHistory };
