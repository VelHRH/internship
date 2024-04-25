import validateOperators from 'calculator/validation/operatorsValidator';
import validateFunctions from 'calculator/validation/functionsValidator';
import validatePoints from 'calculator/validation/pointsValidator';
import validateParentheses from 'calculator/validation/parenthesesValidator';
import validateSymbols from 'calculator/validation/symbolsValidator';

function validate(exp: string): void {
  const expression = exp;
  validateSymbols(expression);
  validateFunctions(expression);
  validatePoints(expression);
  validateParentheses(expression);
  validateOperators(expression);
}

export default { validate };
