import { arrayFromObject } from '@utils/objectHelpers';
import Operators from '@config/Operators';
import FunctionOperators from '@config/FunctionOperators';
import SpecialSymbols from '@config/SpecialSymbols';

const operatorsArray = arrayFromObject(Operators);
const functionOperatorsArray = arrayFromObject(FunctionOperators);
const specialSymbolsArray = arrayFromObject(SpecialSymbols);
const allOperators = [...operatorsArray, ...functionOperatorsArray];
const allConfigElements = [
  ...specialSymbolsArray,
  ...operatorsArray,
  ...functionOperatorsArray,
].filter(element => element.symbol !== '');

function findElementBySymbol(symbol) {
  return allConfigElements.find(el => el.symbol === symbol);
}

export {
  operatorsArray,
  functionOperatorsArray,
  specialSymbolsArray,
  allConfigElements,
  allOperators,
  findElementBySymbol,
};
