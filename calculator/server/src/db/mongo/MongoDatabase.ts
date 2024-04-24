import Database from 'db/Database';
import { Model } from 'mongoose';

class MongoDatabase<T> implements Database<T> {
  constructor(private model: Model<T>) {}

  async create(record: T): Promise<void> {
    this.model.create(record);
  }

  async list(filters?: Partial<T>): Promise<T[]> {
    return await this.model.find(filters || {}, { __v: 0 });
  }

  async delete(record: Partial<T>): Promise<void> {
    this.model.deleteOne(record);
  }

  async update(updates: Partial<T>, filters?: Partial<T>): Promise<void> {
    await this.model.updateMany(filters, updates);
  }

  async get(id: string): Promise<T | null> {
    return await this.model.findOne({ id }, { __v: 0 });
  }

  async find(filters?: Partial<T>): Promise<T | null> {
    return await this.model.findOne(filters, { __v: 0 });
  }
}

export default MongoDatabase;
