import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NameCountryInput {
  @Field()
  name: string;

  @Field()
  country: string;
}
