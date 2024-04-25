import errors from 'calculator/validation/errors/errors';
import AppError from 'errors/AppError';

class ParenthesesSequenceError extends AppError {
  constructor() {
    super(errors.parenthesesSequence);
  }
}

export default ParenthesesSequenceError;
