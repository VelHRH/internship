import { DbItem } from './db.types';

type HistoryItem = DbItem<CalculationResult>;

type CalculationResult = { expression: string; result: number };

export type { HistoryItem, CalculationResult };
