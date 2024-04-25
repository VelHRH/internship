import { UseGuards } from '@nestjs/common';
import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { JwtAuthGuard } from 'auth/guards/jwt/jwt-auth.guard';
import { Location } from 'location/entities/location.entity';
import { UpdateUserInput } from 'user/dto/update-user.dto';
import { User } from 'user/entities/user.entity';
import { UserService } from 'user/user.service';
import { GetUserResponse } from './dto/get-user-response.dto';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => GetUserResponse, { nullable: true })
  getUser(
    @Args('id', { type: () => Int, nullable: true }) id?: number,
  ): Promise<GetUserResponse | null> {
    return this.userService.get(id);
  }

  @Mutation(returns => User)
  @UseGuards(JwtAuthGuard)
  updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    console.log(updateUserInput);
    return this.userService.update(id, updateUserInput);
  }

  @ResolveField(returns => [Location])
  locations(@Parent() user: User): Promise<Location[]> {
    return this.userService.getUserLocations(user.id);
  }
}
