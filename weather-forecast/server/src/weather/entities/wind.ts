import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Wind {
  @Field(type => Float)
  speed: number;

  @Field(type => Int)
  deg: number;

  @Field(type => Float)
  gust: number;
}
