import { toNumber } from 'calculator/utils/symbolHelpers';
import replaceUnaryMinus from './replaceUnaryMinus';
import createdRegexp from 'calculator/regexp/createdRegexp';
import { maxPrecedence } from 'calculator/expression/precedence';
import argumentsParsing from 'calculator/expression/argumentParsing';
import { allOperators } from 'calculator/symbols/configConverter';

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

export default computeExpression;
