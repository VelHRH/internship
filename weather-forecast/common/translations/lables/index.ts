import { mergeTranslations } from '../mergeTranslations';
import { buttonTranslations } from './buttons';
import { placeholderTranslations } from './placeholders';
import { screenTranslations } from './screens';

export * from './buttons';
export * from './placeholders';
export * from './screens';

export const labelTranslations = mergeTranslations(
  placeholderTranslations,
  buttonTranslations,
  screenTranslations,
);
