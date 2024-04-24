import { Operators, SpecialSymbols } from 'config';

const regexpStrings = {
  specialTokensRegexp: /[-\/\\^$*+?.()|[\]{}]/g,
  numberWIthPoint: `\\${Operators.MINUS.symbol}?\\d+(\\${SpecialSymbols.FLOATING_POINT.symbol}\\d+)`,
  number: '\\d',
  noParenthesesArg: `[^${SpecialSymbols.LEFT_PARENTHESIS.symbol}${SpecialSymbols.RIGHT_PARENTHESIS.symbol}]+`,
  addBackslash: '\\$&',
  positiveLookbehind: '?<=^|',
  positiveLookahead: '?=',
};

export default regexpStrings;
