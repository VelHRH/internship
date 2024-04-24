import errors from 'errors/expressionErrors/errors';
import ApiError from 'errors/ApiError';

class SymbolsOutOfBoundError extends ApiError {
  constructor(symbol: string) {
    super(`${errors.symbols} ${symbol}`);
  }
}

export default SymbolsOutOfBoundError;
