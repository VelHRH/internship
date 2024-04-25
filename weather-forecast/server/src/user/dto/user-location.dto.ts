import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UserLocationInput {
  @Field(type => Int)
  userId: number;

  @Field(type => Int)
  locationId: number;
}
