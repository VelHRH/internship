import { FC, useContext } from 'react';

import { HistoryContext } from 'context/HistoryProvider';
import HistoryItem from './HistoryItem';
import LoadMore from './LoadMore';

const HistoryList: FC = () => {
  const { history, isMore, fetchHistory } = useContext(HistoryContext);

  return (
    <div className="flex flex-col gap-2 flex-1 h-full overflow-y-scroll pr-2">
      <h1 className="text-3xl font-bold">History</h1>
      {history.map(historyItem => (
        <HistoryItem key={historyItem.id} {...historyItem} />
      ))}
      {isMore && <LoadMore fetcher={fetchHistory} />}
    </div>
  );
};

export default HistoryList;
