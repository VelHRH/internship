import type { BasicSymbol, ConfigElements } from 'calc-types';

const SpecialSymbols: ConfigElements<BasicSymbol> = {
  AC: {
    symbol: 'AC',
  },
  LEFT_PARENTHESIS: {
    symbol: '(',
  },
  RIGHT_PARENTHESIS: {
    symbol: ')',
  },
  FLOATING_POINT: {
    symbol: '.',
  },
};

export { SpecialSymbols };
