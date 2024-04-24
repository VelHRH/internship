import PointPlacementError from 'errors/expressionErrors/PointPlacementError';
import createdRegexp from 'calculator/regexp/createdRegexp';

function validatePoints(expression: string): void {
  const replacedExpression = removePoints(expression);
  if (createdRegexp.point.test(replacedExpression)) {
    throw new PointPlacementError();
  }
}

function removePoints(expression: string): string {
  return expression.replace(createdRegexp.numberWIthPoint, '');
}

export default validatePoints;
