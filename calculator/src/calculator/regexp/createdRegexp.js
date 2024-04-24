import { operatorsArray, functionOperatorsArray } from '@symbols/configConverter';
import { allTokens } from '@symbols/buttons';
import { replaceSpecialCharacters, createRegExp } from '@regexp/helpers';
import SpecialSymbols from '@config/SpecialSymbols';
import Operators from '@config/Operators';
import groupNames from '@regexp/groupNames';
import regexpStrings from '@regexp/strings';
import { maxPrecedence, minPrecedence } from '@expression/precedence';

const namesOfFunctions = functionOperatorsArray
  .filter(element => !element.isConstant && element.symbol !== '')
  .map(element => replaceSpecialCharacters(element.buttonContent || element.symbol))
  .join('|');
const namesOfConstants = functionOperatorsArray
  .filter(element => element.isConstant)
  .map(element => replaceSpecialCharacters(element.buttonContent || element.symbol))
  .join('|');

// prepare functions' string considering if group names needed for futher parsing
const functionsExpression =
  `(${namesOfConstants})|` +
  `((${namesOfFunctions}|)` +
  `\\${SpecialSymbols.LEFT_PARENTHESIS.symbol}` +
  `(${regexpStrings.noParenthesesArg})\\${SpecialSymbols.RIGHT_PARENTHESIS.symbol})`;
const functionsExpressionWithNames =
  `(?<${groupNames.constantOperator}>${namesOfConstants})|` +
  `((?<${groupNames.functionOperator}>${namesOfFunctions}|)` +
  `\\${SpecialSymbols.LEFT_PARENTHESIS.symbol}` +
  `(?<${groupNames.functionArgument}>${regexpStrings.noParenthesesArg})\\${SpecialSymbols.RIGHT_PARENTHESIS.symbol})`;

// prepare operators' string based on operators array
function prepareOperatorsExp(operators, delimiter = '|') {
  return operators.map(element => replaceSpecialCharacters(element.symbol)).join(delimiter) || null;
}

const binaryOperatorsExp = operatorsArray
  .filter(o => o.symbol !== Operators.MINUS.symbol)
  .map(element => replaceSpecialCharacters(element.symbol))
  .join('|');

function prepareParenthesesExp(delimiter) {
  return `\\${SpecialSymbols.LEFT_PARENTHESIS.symbol}${delimiter}\\${SpecialSymbols.RIGHT_PARENTHESIS.symbol}`;
}

const expressionRegexp = Object.fromEntries(
  // loop from min to max precedence
  Array.from({ length: maxPrecedence - minPrecedence + 1 }, (_, i) => {
    const precedence = i + minPrecedence;
    const currOperators = operatorsArray.filter(operator => operator.precedence === precedence); // operators for current prec. iteration
    return [
      precedence,
      createRegExp(
        `${functionsExpressionWithNames}|(?<${groupNames.arg1}>${
          regexpStrings.numberWIthPoint
        }?)(?<${groupNames.binaryOperator}>${prepareOperatorsExp(currOperators)})(?<${
          groupNames.arg2
        }>${regexpStrings.numberWIthPoint}?)`,
      ),
    ];
  }),
);

const missedMutliplyOptions =
  `(?<${groupNames.function1}>${functionsExpression})(?<${groupNames.function2}>${functionsExpression})|` +
  `(?<${groupNames.functionBeforeNumber}>${functionsExpression})(?<${groupNames.arg1}>${regexpStrings.number})|` +
  `(?<${groupNames.arg2}>${regexpStrings.number})(?<${groupNames.functionAfterNumber}>${functionsExpression})`;

const validSymbols = createRegExp(
  allTokens
    .map(element => replaceSpecialCharacters(element.buttonContent || element.symbol))
    .join('|'),
  'g',
);

const unaryMinus = createRegExp(
  `(${regexpStrings.positiveLookbehind}[\\${
    SpecialSymbols.LEFT_PARENTHESIS.symbol
  }${prepareOperatorsExp(operatorsArray, '')}])-(${regexpStrings.positiveLookahead}\\${
    Operators.MINUS.symbol
  })`,
  'g',
);

const createdRegexp = {
  validSymbols,
  point: createRegExp(`\\${SpecialSymbols.FLOATING_POINT.symbol}`),
  minus: createRegExp(`\\${Operators.MINUS.symbol}`),
  unaryMinus,
  numberWIthPoint: createRegExp(regexpStrings.numberWIthPoint, `g`),
  functionNames: createRegExp(namesOfFunctions, `g`),
  operators: createRegExp(prepareOperatorsExp(operatorsArray), 'g'),
  parentheses: createRegExp(prepareParenthesesExp('|'), `g`),
  invalidParentheses: createRegExp(prepareParenthesesExp(''), `g`),
  invalidOperator: createRegExp(
    `(${prepareOperatorsExp(operatorsArray)})(${prepareOperatorsExp(operatorsArray)}|\\${
      SpecialSymbols.RIGHT_PARENTHESIS.symbol
    })|(\\${SpecialSymbols.LEFT_PARENTHESIS.symbol})(${binaryOperatorsExp})`,
  ),
  missedMultiply: createRegExp(missedMutliplyOptions, 'g'),
  expressionRegexp,
};
export default createdRegexp;
