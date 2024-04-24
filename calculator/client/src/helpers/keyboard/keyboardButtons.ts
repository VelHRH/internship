import type { BasicSymbol } from 'calc-types';
import Section from 'helpers/keyboard/keyboardSections';
import { SymbolArrays } from 'helpers/symbolArrays';
import { CalculatorInputCtx } from 'context/types/input';

type KeyboardButtons = (
  symbols: ReturnType<SymbolArrays>,
  input: CalculatorInputCtx,
) => {
  buttonSections: { name: string; buttons: BasicSymbol[] }[];
  buttonActions: Record<string, () => void>;
};

const generateKeyboardButtons: KeyboardButtons = (symbols, input) => {
  const buttonSections = [
    {
      name: Section.TOP_SECTION,
      buttons: [...symbols.allNotNumbers.slice(0, 3), ...symbols.allNotNumbers.slice(11)],
    },
    { name: Section.LEFT_SECTION, buttons: symbols.allNotNumbers.slice(7, 11) },
    { name: Section.NUMBER_SECTION, buttons: symbols.allNumbers },
    { name: Section.RIGHT_SECTION, buttons: symbols.allNotNumbers.slice(3, 7) },
  ];

  const specialKeysActions = {
    AC: (): void => {
      input.setInputValue('');
    },
  };

  type SpecialKeys = keyof typeof specialKeysActions;

  const buttons = buttonSections.flatMap(section => section.buttons.map(button => button));

  const buttonActions: Record<string, () => void> = Object.fromEntries(
    buttons.map(button => [
      button.symbol,
      specialKeysActions[button.symbol as SpecialKeys] ||
        (() => input.insertText(button.buttonContent || button.symbol)),
    ]),
  );

  return { buttonSections, buttonActions };
};

export default generateKeyboardButtons;
