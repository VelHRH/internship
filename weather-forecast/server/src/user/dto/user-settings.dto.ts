import { Field, InputType, Int } from '@nestjs/graphql';
import { createZodDto } from 'nestjs-zod';
import {
  Language,
  ThemeMode,
  updateUserSettingsSchema,
} from 'weather-forecast-common';

@InputType()
export class UserSettingsInput extends createZodDto(updateUserSettingsSchema) {
  @Field(type => Int)
  locationNumber: number;

  @Field()
  theme: ThemeMode;

  @Field()
  language: Language;
}
