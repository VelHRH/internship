import { FC } from 'react';

import Calculator from 'components/calculator/Calculator';
import { HistoryProvider } from 'context/HistoryProvider';
import HistoryList from 'components/calculator/history/HistoryList';
import { CalculatorInputProvider } from 'context/CalculatorInputProvider';
import { CalculatorProvider } from 'context/CalculatorProvider';

const CalculatorPage: FC = () => (
  <CalculatorInputProvider>
    <HistoryProvider>
      <CalculatorProvider>
        <div className="flex gap-10 w-full m-10">
          <Calculator />
          <HistoryList />
        </div>
      </CalculatorProvider>
    </HistoryProvider>
  </CalculatorInputProvider>
);

export default CalculatorPage;
