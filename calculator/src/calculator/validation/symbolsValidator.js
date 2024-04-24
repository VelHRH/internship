import SymbolsOutOfBoundError from '@validationErrors/SymbolsOutOfBoundError';
import createdRegexp from '@regexp/createdRegexp';

function validateSymbols(expression) {
  const errors = expression.split(createdRegexp.validSymbols);
  for (let error of errors) {
    if (error.length > 0) {
      throw new SymbolsOutOfBoundError(error);
    }
  }
}

export default validateSymbols;
