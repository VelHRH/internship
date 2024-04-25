import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'user/entities/user.entity';

@ObjectType()
export class GetUserResponse extends User {
  @Field()
  hasPassword: boolean;
}
