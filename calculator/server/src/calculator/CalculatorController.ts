import CalculatorService from 'calculator/CalculatorService';
import { RequestHandler } from 'common/types';
import { returnSuccess } from 'common/response';

const calculate: RequestHandler = async (req, res, next) => {
  try {
    const expression = req.body.expression;
    const result = await CalculatorService.calculateWithHistory(expression);
    res.json(returnSuccess(result));
  } catch (err) {
    next(err);
  }
};

export default { calculate };
