import insertMultiplication from 'calculator/expression/insertMultiplication';
import { toNumber } from 'calculator/utils/symbolHelpers';
import { removeSpaces } from 'calculator/utils/expressionHelpers';
import createdRegexp from 'calculator/regexp/createdRegexp';
import { allOperators } from 'calculator/symbols/configConverter';
import replaceUnaryMinus from 'calculator/expression/replaceUnaryMinus';
import argumentsParsing from 'calculator/expression/argumentParsing';
import { maxPrecedence } from 'calculator/expression/precedence';
import ValidationService from 'validation/ValidationService';
import { TRPCError } from '@trpc/server';

type CalculateResult = {
  newExpression: string;
  result: string;
};

function calculate(expression: string): CalculateResult {
  let expressionCopy = preprocessExpression(expression);
  if (expressionCopy === '') {
    return prepareResult(expressionCopy, 0);
  }
  ValidationService.validate(expression);
  expressionCopy = insertMultiplication(expressionCopy);
  const result = toNumber(computeExpression(expressionCopy).toFixed(8));
  return prepareResult(expressionCopy, result);
}

function preprocessExpression(expression: string): string {
  return removeSpaces(expression);
}

function computeExpression(expression: string): number {
  expression = replaceUnaryMinus(expression);
  for (let currPrecedence = 0; currPrecedence <= maxPrecedence; currPrecedence++) {
    let regex = createdRegexp.expressionRegexp[currPrecedence];
    //are any operators left?
    while (regex.test(expression)) {
      expression = expression.replace(regex, (...args) => {
        const { operator, validArgs } = argumentsParsing(args[args.length - 1]); //extracting only devined operator and args out of all named groups
        return allOperators
          .find(op => op.buttonContent === operator || op.symbol === operator)!
          .operation(...validArgs.map(a => computeExpression(a)))
          .toString();
      });
      expression = replaceUnaryMinus(expression); //in case any unary minuses left after previous computing
    }
  }
  return toNumber(expression);
}

function prepareResult(newExpression: string, result: number): CalculateResult {
  return { newExpression, result: result.toString() };
}

export default { calculate };
