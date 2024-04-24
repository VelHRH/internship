import express from 'express';

import validateOperators from 'validation/operatorsValidator';
import validateFunctions from 'validation/functionsValidator';
import validatePoints from 'validation/pointsValidator';
import validateParentheses from 'validation/parenthesesValidator';
import validateSymbols from 'validation/symbolsValidator';
import { removeSpaces } from 'calculator/utils/expressionHelpers';

async function validateExpression(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> {
  const expression = removeSpaces(req.body.expression);
  try {
    validateSymbols(expression);
    validateFunctions(expression);
    validatePoints(expression);
    validateParentheses(expression);
    validateOperators(expression);
    next();
  } catch (err) {
    next(err);
  }
}

export default validateExpression;
