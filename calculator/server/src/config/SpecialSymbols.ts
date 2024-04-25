import { BasicSymbol, ConfigElements } from 'config/configTypes';

const SpecialSymbols: ConfigElements<BasicSymbol> = {
  EQUAL: {
    symbol: '=',
  },
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

export default SpecialSymbols;
