import errors from 'errors/expressionErrors/errors';
import ApiError from 'errors/ApiError';

class PointPlacementError extends ApiError {
  constructor() {
    super(errors.point);
  }
}

export default PointPlacementError;
