import {
  ChangeEventHandler,
  Dispatch,
  KeyboardEventHandler,
  RefObject,
  SetStateAction,
} from 'react';

interface CalculatorInputCtx {
  inputRef: RefObject<HTMLInputElement>;
  hintValue: string;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  clearInput: () => void;
  handleKeyDown: KeyboardEventHandler;
  handleChange: ChangeEventHandler;
  insertText: (text: string) => void;
}

export type { CalculatorInputCtx };
