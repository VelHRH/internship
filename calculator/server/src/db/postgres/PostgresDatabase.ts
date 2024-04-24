import Database from 'db/Database';
import knexConfig from './knexConfig';

class PostgresDatabase<T> implements Database<T> {
  constructor(private table: string) {}

  async list(filters?: Partial<T>): Promise<T[]> {
    return (await knexConfig
      .select()
      .from(this.table)
      .whereRaw(this.objectToWhereClause(filters))) as T[];
  }

  async create(record: T): Promise<void> {
    await knexConfig.insert(record).into(this.table);
  }

  async delete(record: Partial<T>): Promise<void> {
    await knexConfig.del().from(this.table).whereRaw(this.objectToWhereClause(record));
  }

  async update(updates: Partial<T>, filters?: Partial<T>): Promise<void> {
    await knexConfig(this.table).update(updates).whereRaw(this.objectToWhereClause(filters));
  }

  async get(id: string): Promise<T | null> {
    const result = (await knexConfig.select().from(this.table).where({ id })) as T[];
    return result.length ? result[0] : null;
  }

  async find(filters?: Partial<T>): Promise<T | null> {
    const results = (await knexConfig
      .select()
      .from(this.table)
      .whereRaw(this.objectToWhereClause(filters))) as T[];
    return results.length ? results[0] : null;
  }

  private objectToWhereClause(obj?: Record<string, unknown>): string {
    const clauses = Object.entries(obj || {}).map(([key, value]) => {
      if (typeof value === 'string') {
        return `${key} = '${value}'`;
      } else {
        return `${key} = ${value}`;
      }
    });

    return clauses.join(' AND ');
  }
}

export default PostgresDatabase;
