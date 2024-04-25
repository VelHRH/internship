import errors from 'calculator/validation/errors/errors';
import AppError from 'errors/AppError';

class OperatorPlacementError extends AppError {
  constructor(operator: string) {
    super(`${errors.operator} ${operator}`);
  }
}

export default OperatorPlacementError;
