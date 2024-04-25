import { Field, InputType, Int } from '@nestjs/graphql';
import { LocationsFetch } from 'constants/locations';

@InputType()
export class LocationsInput {
  @Field()
  name: string;

  @Field(type => Int, { nullable: true })
  limit: number = LocationsFetch.LIMIT;

  @Field(type => Int, { nullable: true })
  offset: number = LocationsFetch.OFFSET;
}
