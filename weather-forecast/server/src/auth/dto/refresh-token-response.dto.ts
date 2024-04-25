import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RefreshTokenResponse {
  @Field()
  accesstoken: string;

  @Field()
  refreshtoken: string;

  @Field(type => Float)
  expiresin: number;
}
