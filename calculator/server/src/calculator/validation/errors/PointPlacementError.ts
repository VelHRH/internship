import errors from 'calculator/validation/errors/errors';
import AppError from 'errors/AppError';

class PointPlacementError extends AppError {
  constructor() {
    super(errors.point);
  }
}

export default PointPlacementError;
