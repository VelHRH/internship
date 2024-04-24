import errors from '@validationErrors/errors';

class FunctionCallError extends Error {
  constructor(func) {
    super();
    this.message = `${errors.function} ${func}`;
  }
}

export default FunctionCallError;
