import OperatorPlacementError from 'calculator/validation/errors/OperatorPlacementError';
import createdRegexp from 'calculator/regexp/createdRegexp';
import Operators from 'config/Operators';

function trailingOperator(expression: string) {
  if (expression[expression.length - 1].match(createdRegexp.operators)) {
    return expression[expression.length - 1];
  }
}

function startOperator(expression: string) {
  if (expression[0].match(createdRegexp.operators) && expression[0] !== Operators.MINUS.symbol) {
    return expression[0];
  }
}

function middleOperator(expression: string) {
  const match = expression.match(createdRegexp.invalidOperator);
  return match ? match[0] : match;
}

function validateOperators(expression: string) {
  const error =
    trailingOperator(expression) || middleOperator(expression) || startOperator(expression);
  if (error) {
    throw new OperatorPlacementError(error);
  }
}

export default validateOperators;
