import errors from '@validationErrors/errors';

class EmptyParenthesesError extends Error {
  constructor() {
    super();
    this.message = errors.emptyParentheses;
  }
}

export default EmptyParenthesesError;
