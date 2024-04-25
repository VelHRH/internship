import errors from 'calculator/validation/errors/errors';
import AppError from 'errors/AppError';

class SymbolsOutOfBoundError extends AppError {
  constructor(symbol: string) {
    super(`${errors.symbols} ${symbol}`);
  }
}

export default SymbolsOutOfBoundError;
