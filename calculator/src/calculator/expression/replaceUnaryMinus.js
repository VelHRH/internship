import Operators from '@config/Operators';
import createdRegexp from '@regexp/createdRegexp';

function replaceUnaryMinus(string) {
  return string.replace(
    createdRegexp.unaryMinus,
    `${Operators.MINUS.symbol}1${Operators.MULTIPLY.symbol}`,
  );
}

export default replaceUnaryMinus;
