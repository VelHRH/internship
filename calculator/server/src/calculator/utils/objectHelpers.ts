function arrayFromObject<T>(obj: Record<string, T>): T[] {
  return Object.values(obj);
}

export { arrayFromObject };
