import Operators from 'config/Operators';
import createdRegexp from 'calculator/regexp/createdRegexp';

function replaceUnaryMinus(expression: string): string {
  return expression.replace(
    createdRegexp.unaryMinus,
    `${Operators.MINUS.symbol}1${Operators.MULTIPLY.symbol}`,
  );
}

export default replaceUnaryMinus;
