import errors from 'calculator/validation/errors/errors';
import AppError from 'errors/AppError';

class EmptyParenthesesError extends AppError {
  constructor() {
    super(errors.emptyParentheses);
  }
}

export default EmptyParenthesesError;
