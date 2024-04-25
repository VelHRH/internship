import { Field, Float, InputType } from '@nestjs/graphql';
import { NameCountryInput } from './name-country-input.dto';

@InputType()
export class CreateLocationInput extends NameCountryInput {
  @Field()
  state: string;

  @Field(type => Float)
  lat: number;

  @Field(type => Float)
  lon: number;
}
