import PointPlacementError from 'calculator/validation/errors/PointPlacementError';
import createdRegexp from 'calculator/regexp/createdRegexp';

function validatePoints(expression: string) {
  const replacedExpression = removePoints(expression);
  if (createdRegexp.point.test(replacedExpression)) {
    throw new PointPlacementError();
  }
}

function removePoints(expression: string) {
  return expression.replace(createdRegexp.numberWIthPoint, '');
}

export default validatePoints;
