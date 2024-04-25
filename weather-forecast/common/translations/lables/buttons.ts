import { Language, Translations } from '../languages';

export enum ButtonTranslationKey {
  OK = 'okButton',
  NOT_REGISTERED = 'notRegisteredButton',
  ALREADY_REGISTERED = 'alreadyRegisteredButton',
  SAVE = 'saveButton',
  REMOVE = 'removeButton',
  FORECAST = 'forecastButton',
  LOGOUT = 'logoutButton',
  NOW = 'nowButton',
  TODAY = 'todayButton',
  GOOGLE_AUTH = 'googleAuthButton',
  RETRY = 'retryButton',
}

export const buttonTranslations: Translations<ButtonTranslationKey> = {
  [Language.ENGLISH]: {
    [ButtonTranslationKey.OK]: 'Ok',
    [ButtonTranslationKey.NOT_REGISTERED]: 'Not registered yet?',
    [ButtonTranslationKey.ALREADY_REGISTERED]: 'Already registered?',
    [ButtonTranslationKey.SAVE]: 'Save changes',
    [ButtonTranslationKey.REMOVE]: 'Remove',
    [ButtonTranslationKey.FORECAST]: 'Next 5 Days',
    [ButtonTranslationKey.LOGOUT]: 'Logout',
    [ButtonTranslationKey.NOW]: 'Now',
    [ButtonTranslationKey.TODAY]: 'Today',
    [ButtonTranslationKey.GOOGLE_AUTH]: 'Continue with Google',
    [ButtonTranslationKey.RETRY]: 'Retry',
  },
  [Language.UKRAINIAN]: {
    [ButtonTranslationKey.OK]: 'Ок',
    [ButtonTranslationKey.NOT_REGISTERED]: 'Ще не зареєстровані?',
    [ButtonTranslationKey.ALREADY_REGISTERED]: 'Вже зареєстровані?',
    [ButtonTranslationKey.SAVE]: 'Зберегти',
    [ButtonTranslationKey.REMOVE]: 'Видалити',
    [ButtonTranslationKey.FORECAST]: 'Наступні 5 днів',
    [ButtonTranslationKey.LOGOUT]: 'Вийти',
    [ButtonTranslationKey.NOW]: 'Зараз',
    [ButtonTranslationKey.TODAY]: 'Сьогодні',
    [ButtonTranslationKey.GOOGLE_AUTH]: 'Продовжити з Google',
    [ButtonTranslationKey.RETRY]: 'Повторіть спробу',
  },
};
