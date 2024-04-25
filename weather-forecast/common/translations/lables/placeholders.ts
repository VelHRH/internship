import { Language, Translations } from '../languages';

export enum PlaceholderTranslationKey {
  PASSWORD = 'passwordPh',
  EMAIL = 'emailPh',
  SEARCH = 'searchPh',
  OLD_PASSWORD = 'oldPasswordPh',
  NEW_PASSWORD = 'newPasswordPh',
}

export const placeholderTranslations: Translations<PlaceholderTranslationKey> =
  {
    [Language.ENGLISH]: {
      [PlaceholderTranslationKey.PASSWORD]: 'Password',
      [PlaceholderTranslationKey.EMAIL]: 'Email adress',
      [PlaceholderTranslationKey.SEARCH]: 'Search...',
      [PlaceholderTranslationKey.OLD_PASSWORD]: 'Old password',
      [PlaceholderTranslationKey.NEW_PASSWORD]: 'New password',
    },
    [Language.UKRAINIAN]: {
      [PlaceholderTranslationKey.PASSWORD]: 'Пароль',
      [PlaceholderTranslationKey.EMAIL]: 'Електронна адреса',
      [PlaceholderTranslationKey.SEARCH]: 'Пошук...',
      [PlaceholderTranslationKey.OLD_PASSWORD]: 'Старий пароль',
      [PlaceholderTranslationKey.NEW_PASSWORD]: 'Новий пароль',
    },
  };
