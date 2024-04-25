import { IntersectionType, ObjectType } from '@nestjs/graphql';
import { User } from 'user/entities/user.entity';
import { RefreshTokenResponse } from './refresh-token-response.dto';

@ObjectType()
export class LoginResponse extends IntersectionType(
  RefreshTokenResponse,
  User,
) {}
