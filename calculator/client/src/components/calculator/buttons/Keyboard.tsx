import { FC, useContext, useMemo } from 'react';

import ButtonGroup from './ButtonGroup';
import Button from 'components/common/Button';
import { SymbolArrays } from 'helpers/symbolArrays';
import generateKeyboardButtons from 'helpers/keyboard/keyboardButtons';
import { CalculatorContext } from 'context/CalculatorProvider';
import { CalculatorInputContext } from 'context/CalculatorInputProvider';

interface KeyboardProps {
  symbols: ReturnType<SymbolArrays>;
}

const Keyboard: FC<KeyboardProps> = ({ symbols }) => {
  const input = useContext(CalculatorInputContext);
  const { calculate } = useContext(CalculatorContext);

  const { buttonSections, buttonActions } = useMemo(
    () => generateKeyboardButtons(symbols, input),
    [],
  );

  const handleCalculate = () => {
    calculate(input.inputValue);
  };

  return (
    <div className="p-3 flex flex-wrap bg-slate-800 rounded-b-xl h-3/4">
      <Button onClick={handleCalculate}>=</Button>
      {buttonSections.map(section => (
        <ButtonGroup
          key={section.name}
          buttons={section.buttons}
          type={section.name}
          buttonActions={buttonActions}
        />
      ))}
    </div>
  );
};

export default Keyboard;
