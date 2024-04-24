import { Config } from 'calc-types';
import { SymbolArrays } from 'helpers/symbolArrays';

interface ConfigCtx {
  config?: Config;
  error: string;
  symbolArrays?: ReturnType<SymbolArrays>;
}

export type { ConfigCtx };
