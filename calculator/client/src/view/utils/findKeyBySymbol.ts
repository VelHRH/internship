import type { BasicSymbol } from 'api/trpc/infered.types';

function findKeyBySymbol(object: Record<string, BasicSymbol>, symbol: string): string | undefined {
  return Object.keys(object).find(key => object[key].symbol === symbol);
}

export default findKeyBySymbol;
