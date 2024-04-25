import { Field, InputType } from '@nestjs/graphql';
import { createZodDto } from 'nestjs-zod';
import { loginFieldsSchema } from 'weather-forecast-common';

@InputType()
export class LoginInput extends createZodDto(loginFieldsSchema) {
  @Field()
  email: string;

  @Field()
  password: string;
}
