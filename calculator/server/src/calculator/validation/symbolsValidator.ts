import SymbolsOutOfBoundError from 'errors/expressionErrors/SymbolsOutOfBoundError';
import createdRegexp from 'calculator/regexp/createdRegexp';

function validateSymbols(expression: string): void {
  const errors = expression.split(createdRegexp.validSymbols);
  for (let error of errors) {
    if (error.length > 0) {
      throw new SymbolsOutOfBoundError(error);
    }
  }
}

export default validateSymbols;
