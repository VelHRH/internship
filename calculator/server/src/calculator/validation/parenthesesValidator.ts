import createdRegexp from 'calculator/regexp/createdRegexp';
import { SpecialSymbols } from 'config';
import ParenthesesSequenceError from 'errors/expressionErrors/ParenthesesSequenceError';
import EmptyParenthesesError from 'errors/expressionErrors/EmptyParenthesesError';

function validateParentheses(expression: string): void {
  validateEmptyParentheses(expression);
  const parenthesesStack = [];
  const parentheses = expression.match(createdRegexp.parentheses) || [];
  for (let i = 0; i < parentheses.length; i++) {
    if (parentheses[i] === SpecialSymbols.LEFT_PARENTHESIS.symbol) {
      parenthesesStack.push(SpecialSymbols.RIGHT_PARENTHESIS.symbol);
    } else if (parenthesesStack.pop() !== parentheses[i]) {
      throw new ParenthesesSequenceError();
    }
  }
  if (parenthesesStack.length !== 0) {
    throw new ParenthesesSequenceError();
  }
}

function validateEmptyParentheses(expression: string) {
  if (createdRegexp.invalidParentheses.test(expression)) {
    throw new EmptyParenthesesError();
  }
}

export default validateParentheses;
