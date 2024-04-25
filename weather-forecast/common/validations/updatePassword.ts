import { z } from 'zod';
import { PASSWORD_MIN_LENGTH } from '../constants/passwordLength';
import { ErrorTranslationKey, translations } from '../translations';

export const password = z
  .string()
  .min(
    PASSWORD_MIN_LENGTH,
    translations.en[ErrorTranslationKey.PASSWORD_TOO_SHORT],
  );

export const updatePasswordSchema = z.object({
  oldPassword: password.optional(),
  newPassword: password.optional(),
});

export type UpdatePassword = z.infer<typeof updatePasswordSchema>;
