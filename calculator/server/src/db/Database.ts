interface Database<T> {
  create: (record: T) => Promise<void>;
  list: (filters?: Partial<T>) => Promise<T[]>;
  delete: (record: Partial<T>) => Promise<void>;
  update: (updates: Partial<T>, filters?: Partial<T>) => Promise<void>;
  get: (id: string) => Promise<T | null>;
  find: (filters?: Partial<T>) => Promise<T | null>;
}

export default Database;
