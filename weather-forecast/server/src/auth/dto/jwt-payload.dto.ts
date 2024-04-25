import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class JwtPayload {
  @Field(type => Int)
  sub: number;

  @Field()
  username: string;
}
