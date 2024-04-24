import { FC } from 'react';
import type { BasicSymbol } from 'calc-types';
import Button from 'components/common/Button';

interface ButtonGroupProps {
  buttons: BasicSymbol[];
  type: string;
  buttonActions: Record<string, () => void>;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ buttons, type, buttonActions }) => (
  <div className={type}>
    {buttons.map(button => (
      <Button
        key={button.symbol}
        className="bg-transparent hover:bg-slate-700"
        onClick={buttonActions[button.symbol]}
      >
        {button.symbol}
      </Button>
    ))}
  </div>
);

export default ButtonGroup;
