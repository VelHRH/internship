export enum Language {
  ENGLISH = 'en',
  UKRAINIAN = 'uk',
}

export const DEFAULT_LANGUAGE = Language.ENGLISH;

export type Translations<T extends string> = Record<
  Language,
  Record<T, string>
>;
