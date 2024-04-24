import createdRegexp from '@regexp/createdRegexp';
import SpecialSymbols from '@config/SpecialSymbols';
import FunctionCallError from '@validationErrors/FunctionCallError';

function validateFunctions(expression) {
  createdRegexp.functionNames.lastIndex = 0;
  let match;
  while ((match = createdRegexp.functionNames.exec(expression))) {
    if (expression[match.index + match[0].length] !== SpecialSymbols.LEFT_PARENTHESIS.symbol) {
      throw new FunctionCallError(match[0]);
    }
  }
}

export default validateFunctions;
