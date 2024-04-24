import { FC, useContext } from 'react';

import CalculatorInput from './CalculatorInput';
import Hint from './Hint';
import Result from './Result';
import { CalculatorContext } from 'context/CalculatorProvider';

const Screen: FC = () => {
  const { calculateError, calculateResult } = useContext(CalculatorContext);

  const renderResult = () => {
    if (calculateError) return calculateError;
    return calculateResult?.result || '';
  };

  return (
    <div className="p-5 bg-slate-700 rounded-t-xl text-slate-50 flex-1 flex flex-col gap-3">
      <div className="flex text-3xl font-semibold pb-3 border-b-2 border-slate-500">
        <CalculatorInput />
        <Hint />
      </div>
      <Result>{renderResult()}</Result>
    </div>
  );
};

export default Screen;
