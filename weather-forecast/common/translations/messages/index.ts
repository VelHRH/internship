import { mergeTranslations } from '../mergeTranslations';
import { errorTranslations } from './error';
import { infoTranslations } from './info';
import { successTranslations } from './success';

export * from './error';
export * from './info';
export * from './success';

export const messageTranslations = mergeTranslations(
  errorTranslations,
  infoTranslations,
  successTranslations,
);
