import type { ConfigElements, Operator } from 'calc-types';

const FunctionOperators: ConfigElements<Operator> = {
  FACTORIAL: {
    symbol: '!',
    precedence: 0,
    operation: number => {
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    },
  },
  SQUARE_ROOT: {
    symbol: '√',
    buttonContent: 'sqrt',
    precedence: 0,
    operation: Math.sqrt,
  },
  SINUS: {
    symbol: 'sin',
    precedence: 0,
    operation: degrees => Math.sin((degrees * Math.PI) / 180),
  },
  COSINUS: {
    symbol: 'cos',
    precedence: 0,
    operation: degrees => Math.cos((degrees * Math.PI) / 180),
  },
  TANGENT: {
    symbol: 'tg',
    precedence: 0,
    operation: degrees => Math.tan((degrees * Math.PI) / 180),
  },
  COTANGENT: {
    symbol: 'ctg',
    precedence: 0,
    operation: degrees => 1 / Math.tan((degrees * Math.PI) / 180),
  },
  DECIMAL_LOGARITHM: {
    symbol: 'lg',
    precedence: 0,
    operation: number => Math.log(number) / Math.log(10),
  },
  NATURAL_LOGARITHM: {
    symbol: 'ln',
    precedence: 0,
    operation: Math.log,
  },
  PARENTHESES: {
    symbol: '',
    precedence: 0,
    operation: number => number,
  },
  PI: {
    symbol: 'π',
    precedence: 0,
    buttonContent: 'pi',
    operation: () => Math.PI,
    isConstant: true,
  },
  E: {
    symbol: 'e',
    precedence: 0,
    operation: () => Math.E,
    isConstant: true,
  },
};

export { FunctionOperators };
