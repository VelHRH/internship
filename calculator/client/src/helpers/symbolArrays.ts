import type { BasicSymbol, Config, Operator } from 'calc-types';

export type SymbolArrays = (config: Config) => {
  allShortcuts: BasicSymbol[];
  allNumbers: BasicSymbol[];
  allNotNumbers: BasicSymbol[];
};

const genarateSymbolArrays: SymbolArrays = config => {
  const generateFunctionExpression = (element: Operator): Operator => {
    return {
      ...element,
      buttonContent: `${element.buttonContent || element.symbol}${
        config.SpecialSymbols.LEFT_PARENTHESIS.symbol
      }${config.SpecialSymbols.RIGHT_PARENTHESIS.symbol}`,
    };
  };

  const isFunctionOperator = (element: BasicSymbol): element is Operator => {
    const elementAsOperator = element as Operator;
    return Object.values(config.FunctionOperators).includes(elementAsOperator);
  };

  const isConstant = (element: BasicSymbol): boolean => {
    const elementAsOperator = element as Operator;
    return elementAsOperator.isConstant || false;
  };

  const findElementBySymbol = (symbol: string): BasicSymbol => {
    return allConfigElements.find(el => el.symbol === symbol)!;
  };

  const elementBySymbol = (symbol: string): BasicSymbol => {
    const element = findElementBySymbol(symbol);
    if (element) {
      if (isFunctionOperator(element) && !element.isConstant)
        return generateFunctionExpression(element);
      else return element;
    } else return { symbol };
  };

  const allConfigElements = [
    ...Object.values(config.SpecialSymbols),
    ...Object.values(config.Operators),
    ...Object.values(config.FunctionOperators),
  ].filter(element => element.symbol !== '');

  const notDigits = allConfigElements.map(element => elementBySymbol(element.symbol));

  const digits = Array.from({ length: 10 }, (_, i) => ((i + 1) % 10).toString()).map(symbol =>
    elementBySymbol(symbol),
  );

  const allShortcuts = [...notDigits, ...digits];
  const allNumbers = [...digits, ...notDigits.filter(element => isConstant(element))];

  const allNotNumbers = notDigits.filter(element => !isConstant(element));

  return { allShortcuts, allNotNumbers, allNumbers };
};

export default genarateSymbolArrays;
