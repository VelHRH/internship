import { CalculatorInputContext } from 'context/CalculatorInputProvider';
import { FC, useContext } from 'react';

const CalculatorInput: FC = () => {
  const { inputRef, inputValue, handleChange, handleKeyDown, clearInput } =
    useContext(CalculatorInputContext);
  return (
    <input
      ref={inputRef}
      className="max-w-[70%]"
      placeholder="0"
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={clearInput}
    />
  );
};

export default CalculatorInput;
