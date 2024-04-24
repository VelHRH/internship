import type { ConfigElements, Operator } from 'calc-types';

const Operators: ConfigElements<Operator> = {
  PLUS: {
    symbol: '+',
    precedence: 3,
    operation: (operand1, operand2) => operand1 + operand2,
  },
  MINUS: {
    symbol: '-',
    precedence: 3,
    operation: (operand1, operand2) => operand1 - operand2,
  },
  MULTIPLY: {
    symbol: '*',
    precedence: 2,
    operation: (operand1, operand2) => operand1 * operand2,
  },
  DIVIDE: {
    symbol: '/',
    precedence: 2,
    operation: (operand1, operand2) => operand1 / operand2,
  },
  MODULO: {
    symbol: '%',
    precedence: 2,
    operation: (operand1, operand2) => operand1 % operand2,
  },
  DEGREE: {
    symbol: '^',
    precedence: 1,
    operation: (operand1, operand2) => Math.pow(operand1, operand2),
  },
};

export { Operators };
