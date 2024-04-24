import { BasicSymbol, Operator } from 'calc-types';
import { arrayFromObject } from 'calculator/utils/objectHelpers';
import { Operators, FunctionOperators, SpecialSymbols } from 'config';

const operatorsArray = arrayFromObject<Operator>(Operators);
const functionOperatorsArray = arrayFromObject<Operator>(FunctionOperators);
const specialSymbolsArray = arrayFromObject(SpecialSymbols);
const allOperators = [...operatorsArray, ...functionOperatorsArray];

const allConfigElements = [
  ...specialSymbolsArray,
  ...operatorsArray,
  ...functionOperatorsArray,
].filter(element => element.symbol !== '');

const digits: BasicSymbol[] = Array.from({ length: 10 }, (_, i) => ((i + 1) % 10).toString()).map(
  symbol => ({
    symbol,
  }),
);

const allTokens = [...allConfigElements, ...digits];

export {
  operatorsArray,
  functionOperatorsArray,
  specialSymbolsArray,
  allConfigElements,
  allOperators,
  allTokens,
};
