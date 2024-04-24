import { FC, useContext } from 'react';
import type { HistoryItem } from 'calc-types';

import Button from 'components/common/Button';
import { CalculatorContext } from 'context/CalculatorProvider';

const HistoryItem: FC<HistoryItem> = historyItem => {
  const { setCalculateResult } = useContext(CalculatorContext);

  const handleHistory = () => setCalculateResult(historyItem);
  return (
    <div className="bg-slate-200 w-full flex justify-between items-center p-3 rounded-lg">
      {historyItem.expression} = {historyItem.result}
      <Button onClick={handleHistory} className="bg-indigo-500 text-slate-50 p-2 rounded-md w-24">
        Display
      </Button>
    </div>
  );
};

export default HistoryItem;
