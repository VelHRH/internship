import OperatorPlacementError from '@validationErrors/OperatorPlacementError';
import createdRegexp from '@regexp/createdRegexp';
import Operators from '@config/Operators';

function trailingOperator(expression) {
  if (expression[expression.length - 1].match(createdRegexp.operators)) {
    return expression[expression.length - 1];
  }
}

function startOperator(expression) {
  if (expression[0].match(createdRegexp.operators) && expression[0] !== Operators.MINUS.symbol) {
    return expression[0];
  }
}

function middleOperator(expression) {
  const match = expression.match(createdRegexp.invalidOperator);
  return match ? match[0] : match;
}

function validateOperators(expression) {
  const error =
    trailingOperator(expression) || middleOperator(expression) || startOperator(expression);
  if (error) {
    throw new OperatorPlacementError(error);
  }
}

export default validateOperators;
