import { z } from 'zod';
import { translations } from '../translations';
import { ErrorTranslationKey } from '../translations/messages/error';
import { password } from './updatePassword';

export const loginFieldsSchema = z.object({
  email: z.string().email(translations.en[ErrorTranslationKey.INVALID_EMAIL]),
  password: password,
});

export type LoginFields = z.infer<typeof loginFieldsSchema>;
