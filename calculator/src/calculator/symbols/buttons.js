import SpecialSymbols from '@config/SpecialSymbols';
import {
  allConfigElements,
  findElementBySymbol,
  functionOperatorsArray,
} from '@symbols/configConverter';

const notDigits = allConfigElements.map(element => elementBySymbol(element.symbol));
const digits = Array.from({ length: 10 }, (_, i) => ((i + 1) % 10).toString()).map(symbol =>
  elementBySymbol(symbol),
);

function elementBySymbol(symbol) {
  const element = findElementBySymbol(symbol);
  return element
    ? functionOperatorsArray.includes(element) && !element.isConstant
      ? generateFunctionExpression(element)
      : element
    : { symbol };
}

//add parentheses to func.operators for keybord input
function generateFunctionExpression(element) {
  return {
    ...element,
    buttonContent: `${element.buttonContent || element.symbol}${
      SpecialSymbols.LEFT_PARENTHESIS.symbol
    }${SpecialSymbols.RIGHT_PARENTHESIS.symbol}`,
  };
}

const allTokens = [...allConfigElements, ...digits].filter(element => !element.onClick);
const allShortcuts = [...notDigits, ...digits].filter(element => !element.onClick);
const allNumbers = [...digits, ...notDigits.filter(element => element.isConstant)];
const allNotNumbers = notDigits.filter(element => !element.isConstant);

export { allShortcuts, allNumbers, allNotNumbers, allTokens };
