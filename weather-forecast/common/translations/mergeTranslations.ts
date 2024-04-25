import { Language, Translations } from './languages';

export function mergeTranslations(...translations: Translations<string>[]) {
  const result: Translations<string> = {} as Translations<string>;
  translations.forEach(translation => {
    Object.values(Language).forEach(lang => {
      result[lang] = { ...result[lang], ...translation[lang] };
    });
  });
  return result;
}
