import { BasicSymbol, ConfigElements } from 'calc-types';

function arrayFromObject<T extends BasicSymbol>(obj: ConfigElements<T>): T[] {
  return Object.values(obj);
}

export { arrayFromObject };
