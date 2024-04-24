import { v4 as uuidv4 } from 'uuid';
import type { HistoryItem, PaginatedData, PaginationOptions } from 'calc-types';

import paginate from 'common/pagination';
import db from 'db';

async function list(): Promise<HistoryItem[]> {
  const history = await db.history.list();
  return history.reverse();
}

async function paginatedList(
  paginationOptions: PaginationOptions,
): Promise<PaginatedData<HistoryItem[]>> {
  const history = await list();
  return paginate(history, paginationOptions);
}

async function getByExpression(expression: string): Promise<number | undefined> {
  const history = await list();
  const record = history.find(h => h.expression === expression);
  return record?.result;
}

async function create(expression: string, result: number): Promise<void> {
  const id = uuidv4();
  await db.history.create({ expression, result, id });
}

async function addExisting(expression: string): Promise<void> {
  const result = (await getByExpression(expression))!; // we are sure we get one because it's already added once
  create(expression, result);
}

async function deleteByExpression(expression: string): Promise<void> {
  await db.history.delete({ expression });
}

export default { paginatedList, getByExpression, create, addExisting, deleteByExpression };
