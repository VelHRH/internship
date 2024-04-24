type BasicSymbol = {
  symbol: string;
  buttonContent?: string;
};

type Operator = BasicSymbol & {
  precedence: number;
  operation: (...operands: number[]) => number;
  isConstant?: true;
};

type ConfigElements<T extends BasicSymbol> = Record<string, T>;

type Config = {
  FunctionOperators: ConfigElements<Operator>;
  Operators: ConfigElements<Operator>;
  SpecialSymbols: ConfigElements<BasicSymbol>;
};

export type { ConfigElements, BasicSymbol, Operator, Config };
