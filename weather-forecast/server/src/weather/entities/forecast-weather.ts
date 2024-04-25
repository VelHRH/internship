import { Field, ObjectType } from '@nestjs/graphql';
import { CurrentWeather } from './current-weather';

@ObjectType()
export class ForecastWeather extends CurrentWeather {
  @Field()
  time: Date;
}
