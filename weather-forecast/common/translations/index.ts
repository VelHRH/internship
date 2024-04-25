import { labelTranslations } from './lables';
import { mergeTranslations } from './mergeTranslations';
import { messageTranslations } from './messages';
import { weatherTranslations } from './weather';

export * from './lables';
export * from './languages';
export * from './messages';
export * from './weather';

export const translations = mergeTranslations(
  labelTranslations,
  messageTranslations,
  weatherTranslations,
);
