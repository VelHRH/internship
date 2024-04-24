import PointPlacementError from '@validationErrors/PointPlacementError';
import createdRegexp from '@regexp/createdRegexp';

function validatePoints(expression) {
  const replacedExpression = removePoints(expression);
  if (createdRegexp.point.test(replacedExpression)) {
    throw new PointPlacementError();
  }
}

function removePoints(expression) {
  return expression.replace(createdRegexp.numberWIthPoint, '');
}

export default validatePoints;
