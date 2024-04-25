import { Language, Translations } from '../languages';

export enum InfoTranslationKey {
  MIN_REACHED = 'minReachedInfo',
  MAX_REACHED = 'maxReachedInfo',
  AUTH_REQUIRED = 'authRequiredInfo',
  AUTH_REQUIRED_LOCATIONS = 'authRequiredLocationsInfo',
}

export const infoTranslations: Translations<InfoTranslationKey> = {
  [Language.ENGLISH]: {
    [InfoTranslationKey.MIN_REACHED]: 'Min number is reached',
    [InfoTranslationKey.MAX_REACHED]: 'Max number is reached',
    [InfoTranslationKey.AUTH_REQUIRED]: 'Login is required to access this page',
    [InfoTranslationKey.AUTH_REQUIRED_LOCATIONS]: 'Login to add locations',
  },
  [Language.UKRAINIAN]: {
    [InfoTranslationKey.AUTH_REQUIRED]: 'Для доступу потрібен вхід',
    [InfoTranslationKey.AUTH_REQUIRED_LOCATIONS]:
      'Увійдіть в акаунт, щоб додати локацію',
    [InfoTranslationKey.MIN_REACHED]: 'Мінімальна кількість досягнута',
    [InfoTranslationKey.MAX_REACHED]: 'Максимальна кількість досягнута',
  },
};
