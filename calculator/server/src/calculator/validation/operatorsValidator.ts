import OperatorPlacementError from 'errors/expressionErrors/OperatorPlacementError';
import createdRegexp from 'calculator/regexp/createdRegexp';
import { Operators } from 'config';

function trailingOperator(expression: string): string | undefined {
  if (expression[expression.length - 1].match(createdRegexp.operators)) {
    return expression[expression.length - 1];
  }
}

function startOperator(expression: string): string | undefined {
  if (expression[0].match(createdRegexp.operators) && expression[0] !== Operators.MINUS.symbol) {
    return expression[0];
  }
}

function middleOperator(expression: string): string | undefined {
  const match = expression.match(createdRegexp.invalidOperator);
  if (match) {
    return match[0];
  }
}

function validateOperators(expression: string): void {
  if (expression.length === 0) return;
  const error =
    trailingOperator(expression) || middleOperator(expression) || startOperator(expression);
  if (error) {
    throw new OperatorPlacementError(error);
  }
}

export default validateOperators;
