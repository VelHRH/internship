import {
  ChangeEventHandler,
  FC,
  KeyboardEventHandler,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { CalculatorInputCtx } from 'context/types/input';
import defaultKeys from 'config/defaultKeys';
import { ConfigContext } from './ConfigProvider';

export const CalculatorInputContext = createContext({} as CalculatorInputCtx);

interface CalculatorInputProviderProps extends PropsWithChildren {}

export const CalculatorInputProvider: FC<CalculatorInputProviderProps> = ({ children }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [hintValue, setHintValue] = useState<string>('');

  const { config, symbolArrays } = useContext(ConfigContext);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    if (input.scrollWidth > input.clientWidth) {
      input.scrollLeft = input.scrollWidth - input.clientWidth;
    }
    inputValue.length === 0 ? clearInput() : (input.style.width = inputValue.length + 'ch');
    updateHint();
  }, [inputValue]);

  const handleKeyDown: KeyboardEventHandler = e => {
    const keychar = e.key;
    if (!isDefaultKey(keychar, e.ctrlKey)) {
      e.preventDefault();
    }
    const allChars = symbolArrays?.allShortcuts
      .map(elem => elem.buttonContent || elem.symbol)
      .join('');
    if (allChars?.includes(keychar)) {
      insertText(keychar);
    }
    if (e.key === 'Enter') {
      insertText(hintValue);
    }
  };

  const isDefaultKey = (keychar: string, ctrlKey: boolean): boolean => {
    const defaultKey = defaultKeys.find(key => key.key === keychar);
    if (!defaultKey) return false;
    if (defaultKey.isCtrl !== ctrlKey) return false;
    return true;
  };

  const moveCursor = (moveCursorNumber: number): number => {
    if (!inputRef.current) return 0;
    const cursorStartPosition = inputRef.current.selectionStart!;

    setTimeout(() => {
      inputRef.current!.focus();
      inputRef.current!.setSelectionRange(
        cursorStartPosition + moveCursorNumber,
        cursorStartPosition + moveCursorNumber,
      );
    }, 0);

    return cursorStartPosition;
  };

  const insertText = (textToInsert?: string): void => {
    if (!config?.SpecialSymbols) return;
    const moveCursorNumber = !textToInsert
      ? -1
      : textToInsert.includes(config.SpecialSymbols.RIGHT_PARENTHESIS.symbol) &&
        textToInsert.includes(config.SpecialSymbols.LEFT_PARENTHESIS.symbol)
      ? textToInsert.length - 1
      : textToInsert.length;

    const cursorStartPosition = moveCursor(moveCursorNumber);

    setInputValue(
      prev =>
        prev.slice(0, textToInsert ? cursorStartPosition : cursorStartPosition - 1) +
        (textToInsert || '') +
        prev.slice(cursorStartPosition),
    );
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setInputValue(e.target.value);
  };

  const clearInput = (): void => {
    if (!inputRef.current) return;
    inputRef.current.style.width = '70%';
    setHintValue('');
  };

  const updateHint = (): void => {
    if (!symbolArrays) return;
    setHintValue('');
    inputRef.current!.scrollIntoView();
    const words = symbolArrays.allShortcuts.map(elem => elem.buttonContent || elem.symbol);
    for (let start = 0; start < inputValue.length; start++) {
      const substr = inputValue.slice(start);
      for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(substr)) {
          setHintValue(words[i].substring(substr.length));
          return;
        }
      }
    }
  };

  const value = {
    clearInput,
    handleKeyDown,
    inputValue,
    inputRef,
    handleChange,
    hintValue,
    insertText,
    setInputValue,
  };

  return (
    <CalculatorInputContext.Provider value={value}>{children}</CalculatorInputContext.Provider>
  );
};
