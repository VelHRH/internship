import insertMultiplication from '@expression/insertMultiplication';
import { toNumber } from '@utils/symbolHelpers';
import { removeSpaces } from '@utils/expressionHelpers';
import createdRegexp from '@regexp/createdRegexp';
import { allOperators } from '@symbols/configConverter';
import replaceUnaryMinus from '@expression/replaceUnaryMinus';
import argumentsParsing from '@expression/argumentParsing';
import validate from '@validation/ValidationService';
import { maxPrecedence } from '@expression/precedence';

function calculate(expression) {
  let expressionCopy = preprocessExpression(expression);
  if (expressionCopy === '') {
    return prepareResult(expressionCopy, 0);
  }
  validate(expressionCopy);
  expressionCopy = insertMultiplication(expressionCopy);
  const result = toNumber(computeExpression(expressionCopy).toFixed(8));
  return prepareResult(expressionCopy, result);
}

function preprocessExpression(expression) {
  return removeSpaces(expression);
}

function computeExpression(expression) {
  expression = replaceUnaryMinus(expression);
  for (let currPrecedence = 0; currPrecedence <= maxPrecedence; currPrecedence++) {
    let regex = createdRegexp.expressionRegexp[currPrecedence];
    //are any operators left?
    while (regex.test(expression)) {
      expression = expression.replace(regex, (...args) => {
        const { operator, validArgs } = argumentsParsing(args[args.length - 1]); //extracting only devined operator and args out of all named groups
        return allOperators
          .find(op => op.buttonContent === operator || op.symbol === operator)
          .operation(...validArgs.map(a => computeExpression(a)));
      });
      expression = replaceUnaryMinus(expression); //in case any unary minuses left after previous computing
    }
  }
  return toNumber(expression);
}

function prepareResult(newExpression, result) {
  return { newExpression, result };
}

export default calculate;
