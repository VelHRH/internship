import validateOperators from '@validation/operatorsValidator';
import validateFunctions from '@validation/functionsValidator';
import validatePoints from '@validation/pointsValidator';
import validateParentheses from '@validation/parenthesesValidator';
import validateSymbols from '@validation/symbolsValidator';

function validate(expression) {
  validateSymbols(expression);
  validateFunctions(expression);
  validatePoints(expression);
  validateParentheses(expression);
  validateOperators(expression);
}

export default validate;
