import { Schema, model } from 'mongoose';
import type { HistoryItem } from 'calc-types';

const historySchema = new Schema<HistoryItem>({
  id: { type: String, required: true, unique: true },
  expression: { type: String, required: true },
  result: { type: Number, required: true },
});

export default model<HistoryItem>('History', historySchema);
