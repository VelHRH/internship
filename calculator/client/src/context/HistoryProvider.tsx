import { FC, PropsWithChildren, createContext, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { HistoryItem, PaginatedData } from 'calc-types';

import PaginateOptions from 'config/paginateOptions';
import requestError from 'helpers/requestError';
import { AddOneRecord, ResultByExpression, HistoryCtx } from 'context/types/history';
import HistoryApi from 'api/HistoryApi';
import useError from 'hooks/useError';

export const HistoryContext = createContext({} as HistoryCtx);

interface HistoryProviderProps extends PropsWithChildren {}

export const HistoryProvider: FC<HistoryProviderProps> = ({ children }) => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [fetchedHistory, setFetchedHistory] = useState<PaginatedData<HistoryItem[]>>();
  const { error: historyError, setError: setHistoryError } = useError();
  const [isMore, setIsMore] = useState<boolean>(true);
  const pageRef = useRef<number>(1);
  const pageSize = PaginateOptions.PAGE_SIZE;
  const fetchHistory = async () => {
    try {
      const data = await HistoryApi.list(pageRef.current, pageSize);
      setFetchedHistory(data);
    } catch (err) {
      setHistoryError(requestError(err));
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  useEffect(() => {
    if (!fetchedHistory) return;
    const currMaxRecords = (pageRef.current - 1) * pageSize;
    const clientHistory = history.slice(0, currMaxRecords);
    setHistory([...clientHistory, ...fetchedHistory.data]);
    pageRef.current++;
    if ((pageRef.current - 1) * pageSize >= fetchedHistory.total) setIsMore(false);
  }, [fetchedHistory]);

  const resultByExpression: ResultByExpression = expression => {
    return history.find(record => record.expression === expression)?.result;
  };

  const addOneRecord: AddOneRecord = calculateResult => {
    if (history[0] && calculateResult.expression === history[0].expression) return;
    if (resultByExpression(calculateResult.expression)) HistoryApi.add(calculateResult);

    setHistory(prev => [{ ...calculateResult, id: uuidv4() }, ...prev]);
    pageRef.current = Math.floor(history.length / pageSize) + 1;
  };

  const value = { history, isMore, fetchHistory, historyError, addOneRecord, resultByExpression };

  return <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>;
};
