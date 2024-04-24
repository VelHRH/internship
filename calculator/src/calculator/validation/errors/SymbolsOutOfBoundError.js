import errors from '@validationErrors/errors';

class SymbolsOutOfBoundError extends Error {
  constructor(symbol) {
    super();
    this.message = `${errors.symbols} ${symbol}`;
  }
}

export default SymbolsOutOfBoundError;
