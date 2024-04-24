import errors from '@validationErrors/errors';

class ParenthesesSequenceError extends Error {
  constructor() {
    super();
    this.message = errors.parenthesesSequence;
  }
}

export default ParenthesesSequenceError;
