import SymbolsOutOfBoundError from 'calculator/validation/errors/SymbolsOutOfBoundError';
import createdRegexp from 'calculator/regexp/createdRegexp';

function validateSymbols(expression: string) {
  const errors = expression.split(createdRegexp.validSymbols);
  for (let error of errors) {
    if (error.length > 0) {
      throw new SymbolsOutOfBoundError(error);
    }
  }
}

export default validateSymbols;
