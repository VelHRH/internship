type DbItem<T> = T & { id: string };

type ExcludeId<T> = T extends { id: string } ? Omit<T, 'id'> : T;

export type { DbItem, ExcludeId };
