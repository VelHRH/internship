import type { Config } from 'calc-types';
import { FunctionOperators, Operators, SpecialSymbols } from 'config';

function list(): Config {
  return { FunctionOperators, Operators, SpecialSymbols };
}

export default { list };
