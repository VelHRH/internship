import createdRegexp from 'calculator/regexp/createdRegexp';
import { removeSpaces } from 'calculator/utils/expressionHelpers';

function preprocessExpression(expression: string): string {
  let expressionCopy = removeSpaces(expression);
  return insertMultiplication(expressionCopy);
}

function insertMultiplication(expression: string): string {
  while (createdRegexp.missedMultiply.test(expression)) {
    expression = replaceWithMultiply(expression);
  }
  return replaceWithMultiply(expression);
}

function replaceWithMultiply(expression: string): string {
  return expression.replace(createdRegexp.missedMultiply, (...args) => {
    const allArguments = Object.values(args[args.length - 1]).filter(g => g !== undefined);
    return `${allArguments[0]}*${allArguments[1]}`;
  });
}

export default preprocessExpression;
