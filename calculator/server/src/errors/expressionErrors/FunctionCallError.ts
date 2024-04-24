import errors from 'errors/expressionErrors/errors';
import ApiError from 'errors/ApiError';

class FunctionCallError extends ApiError {
  constructor(func: string) {
    super(`${errors.function} ${func}`);
  }
}

export default FunctionCallError;
