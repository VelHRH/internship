import createdRegexp from '@regexp/createdRegexp';
import SpecialSymbols from '@config/SpecialSymbols';
import ParenthesesSequenceError from '@validationErrors/ParenthesesSequenceError';
import EmptyParenthesesError from '@validationErrors/EmptyParenthesesError';

function validateParentheses(expression) {
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

function validateEmptyParentheses(expression) {
  if (createdRegexp.invalidParentheses.test(expression)) {
    throw new EmptyParenthesesError();
  }
}

export default validateParentheses;
