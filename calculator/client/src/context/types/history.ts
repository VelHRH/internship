import type { CalculationResult, HistoryItem } from 'calc-types';

type AddOneRecord = (record: CalculationResult) => void;
type ResultByExpression = (expression: string) => number | undefined;

interface HistoryCtx {
  history: HistoryItem[];
  isMore: boolean;
  historyError: string;
  addOneRecord: AddOneRecord;
  resultByExpression: ResultByExpression;
  fetchHistory: () => void;
}

export type { HistoryCtx, AddOneRecord, ResultByExpression };
