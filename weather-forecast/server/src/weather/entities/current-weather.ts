import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Wind } from './wind';

@ObjectType()
export class CurrentWeather {
  @Field()
  name: string;

  @Field()
  icon: string;

  @Field(type => Int)
  temperature: number;

  @Field(type => Int)
  feelsLike: number;

  @Field(type => Int)
  pressure: number;

  @Field(type => Int)
  humidity: number;

  @Field(type => Wind)
  wind: Wind;
}
