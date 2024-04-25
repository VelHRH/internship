import { z } from 'zod';
import { updatePasswordSchema } from './updatePassword';
import { updateUserSettingsSchema } from './updateUserSettings';

export const updateUserSchema = z.object({
  password: updatePasswordSchema.optional(),
  userSettings: updateUserSettingsSchema.optional(),
  refreshtoken: z.string().optional(),
  googleId: z.string().optional(),
});

export type UpdateUser = z.infer<typeof updateUserSchema>;
