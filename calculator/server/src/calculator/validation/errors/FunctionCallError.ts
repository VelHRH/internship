import errors from 'calculator/validation/errors/errors';
import AppError from 'errors/AppError';

class FunctionCallError extends AppError {
  constructor(func: string) {
    super(`${errors.function} ${func}`);
  }
}

export default FunctionCallError;
