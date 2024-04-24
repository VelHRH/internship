import { allOperators } from '@symbols/configConverter';

const maxPrecedence = Math.max(...allOperators.map(operator => operator.precedence));
const minPrecedence = Math.min(...allOperators.map(operator => operator.precedence));

export { maxPrecedence, minPrecedence };
