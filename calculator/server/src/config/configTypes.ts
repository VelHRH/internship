type BasicSymbol = {
  symbol: string;
  buttonContent?: string;
};

type Operator = BasicSymbol & {
  precedence: number;
  operation: (...operands: number[]) => number;
  isConstant?: true;
};

type ConfigElements<T extends BasicSymbol> = {
  [key: string]: T;
};

export { ConfigElements, BasicSymbol, Operator };
