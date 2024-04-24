import type { HistoryItem } from 'calc-types';
import Database from './Database';

//specifying all tables in app
type DB = {
  history: Database<HistoryItem>;
};

const dbEntities: (keyof DB)[] = ['history'];

export { DB, dbEntities };
