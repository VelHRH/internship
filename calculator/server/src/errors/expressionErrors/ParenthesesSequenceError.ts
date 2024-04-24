import errors from 'errors/expressionErrors/errors';
import ApiError from 'errors/ApiError';

class ParenthesesSequenceError extends ApiError {
  constructor() {
    super(errors.parenthesesSequence);
  }
}

export default ParenthesesSequenceError;
