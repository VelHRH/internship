import { Field, InputType } from '@nestjs/graphql';
import { createZodDto } from 'nestjs-zod';
import { updateUserSchema } from 'weather-forecast-common';
import { UpdatePasswordInput } from './update-password.dto';
import { UserSettingsInput } from './user-settings.dto';

@InputType()
export class UpdateUserInput extends createZodDto(updateUserSchema) {
  @Field(type => UpdatePasswordInput, { nullable: true })
  password?: UpdatePasswordInput;

  @Field(type => UserSettingsInput, { nullable: true })
  userSettings?: UserSettingsInput;

  @Field({ nullable: true })
  refreshtoken?: string;

  @Field({ nullable: true })
  googleId?: string;
}
