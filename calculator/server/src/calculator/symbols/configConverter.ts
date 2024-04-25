import { arrayFromObject } from 'calculator/utils/objectHelpers';
import Operators from 'config/Operators';
import FunctionOperators from 'config/FunctionOperators';
import SpecialSymbols from 'config/SpecialSymbols';
import { BasicSymbol } from 'config/configTypes';

const operatorsArray = arrayFromObject(Operators);
const functionOperatorsArray = arrayFromObject(FunctionOperators);
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
