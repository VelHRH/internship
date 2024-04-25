import { z } from 'zod';
import { LocationNumber } from '../constants/locationNumber';
import { ThemeMode } from '../theme';
import { Language } from '../translations';

export const updateUserSettingsSchema = z.object({
  locationNumber: z.number().min(LocationNumber.MIN).max(LocationNumber.MAX),
  theme: z.nativeEnum(ThemeMode),
  language: z.nativeEnum(Language),
});

export type UpdateUserSettings = z.infer<typeof updateUserSettingsSchema>;
