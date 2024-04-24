import errors from 'errors/expressionErrors/errors';
import ApiError from 'errors/ApiError';

class OperatorPlacementError extends ApiError {
  constructor(operator: string) {
    super(`${errors.operator} ${operator}`);
  }
}

export default OperatorPlacementError;
