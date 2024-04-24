import errors from 'errors/expressionErrors/errors';
import ApiError from 'errors/ApiError';

class EmptyParenthesesError extends ApiError {
  constructor() {
    super(errors.emptyParentheses);
  }
}

export default EmptyParenthesesError;
