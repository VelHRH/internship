import { FC, useContext } from 'react';
import { CalculatorInputContext } from 'context/CalculatorInputProvider';

const Hint: FC = () => {
  const { hintValue } = useContext(CalculatorInputContext);
  return <p className="text-slate-400">{hintValue}</p>;
};

export default Hint;
