import { Field, InputType } from '@nestjs/graphql';
import { createZodDto } from 'nestjs-zod';
import { updatePasswordSchema } from 'weather-forecast-common';

@InputType()
export class UpdatePasswordInput extends createZodDto(updatePasswordSchema) {
  @Field({ nullable: true })
  oldPassword?: string;

  @Field({ nullable: true })
  newPassword?: string;
}
