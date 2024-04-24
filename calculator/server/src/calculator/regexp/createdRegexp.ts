import type { Operator } from 'calc-types';
import {
  operatorsArray,
  functionOperatorsArray,
  allTokens,
} from 'calculator/symbols/configConverter';
import { replaceSpecialCharacters, createRegExp } from 'calculator/regexp/helpers';
import { SpecialSymbols, Operators } from 'config';
import GroupName from 'calculator/regexp/groupNames';
import regexpStrings from 'calculator/regexp/strings';
import { maxPrecedence, minPrecedence } from 'calculator/expression/precedence';

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
  `(?<${GroupName.CONSTANT_OPERATOR}>${namesOfConstants})|` +
  `((?<${GroupName.FUNCTION_OPERATOR}>${namesOfFunctions}|)` +
  `\\${SpecialSymbols.LEFT_PARENTHESIS.symbol}` +
  `(?<${GroupName.FUNCTION_ARGUMENT}>${regexpStrings.noParenthesesArg})\\${SpecialSymbols.RIGHT_PARENTHESIS.symbol})`;

// prepare operators' string based on operators array
function prepareOperatorsExp(operators: Operator[], delimiter = '|'): string | null {
  return operators.map(element => replaceSpecialCharacters(element.symbol)).join(delimiter) || null;
}

const binaryOperatorsExp = operatorsArray
  .filter(o => o.symbol !== Operators.MINUS.symbol)
  .map(element => replaceSpecialCharacters(element.symbol))
  .join('|');

function prepareParenthesesExp(delimiter: string): string {
  return `\\${SpecialSymbols.LEFT_PARENTHESIS.symbol}${delimiter}\\${SpecialSymbols.RIGHT_PARENTHESIS.symbol}`;
}

const expressionRegexp: Record<number, RegExp> = Object.fromEntries(
  // loop from min to max precedence
  Array.from({ length: maxPrecedence - minPrecedence + 1 }, (_, i) => {
    const precedence = i + minPrecedence;
    const currOperators = operatorsArray.filter(operator => operator.precedence === precedence); // operators for current prec. iteration
    return [
      precedence,
      createRegExp(
        `${functionsExpressionWithNames}|(?<${GroupName.ARG_1}>${
          regexpStrings.numberWIthPoint
        }?)(?<${GroupName.BINARY_OPERATOR}>${prepareOperatorsExp(currOperators)})(?<${
          GroupName.ARG_2
        }>${regexpStrings.numberWIthPoint}?)`,
      ),
    ];
  }),
);

const missedMutliplyOptions =
  `(?<${GroupName.FUNCTION_1}>${functionsExpression})(?<${GroupName.FUNCTION_2}>${functionsExpression})|` +
  `(?<${GroupName.FUNCTION_BEFORE_NUMBER}>${functionsExpression})(?<${GroupName.ARG_1}>${regexpStrings.number})|` +
  `(?<${GroupName.ARG_2}>${regexpStrings.number})(?<${GroupName.FUNCTION_AFTER_NUMBER}>${functionsExpression})`;

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
  operators: createRegExp(`${prepareOperatorsExp(operatorsArray)}`, 'g'),
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
