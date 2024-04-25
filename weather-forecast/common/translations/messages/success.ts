import { Language, Translations } from '../languages';

export enum SuccessTranslationKey {
  SUCCESS_ADD = 'successAdd',
  SUCCESS_REMOVE = 'successRemove',
  SAVED = 'savedSuccess',
}

export const successTranslations: Translations<SuccessTranslationKey> = {
  [Language.ENGLISH]: {
    [SuccessTranslationKey.SUCCESS_ADD]: 'Added successfuly',
    [SuccessTranslationKey.SUCCESS_REMOVE]: 'Removed successfuly',
    [SuccessTranslationKey.SAVED]: 'Changes saved',
  },
  [Language.UKRAINIAN]: {
    [SuccessTranslationKey.SUCCESS_ADD]: 'Додано успішно',
    [SuccessTranslationKey.SUCCESS_REMOVE]: 'Успішно видалено',
    [SuccessTranslationKey.SAVED]: 'Зміни збережено',
  },
};
