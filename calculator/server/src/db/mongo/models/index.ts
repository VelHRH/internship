import { HistoryItem } from 'calc-types';
import { DB } from 'db/dbEntites';
import { Model } from 'mongoose';
import history from './History';

const models: Record<keyof DB, Model<HistoryItem>> = { history };

export default models;
