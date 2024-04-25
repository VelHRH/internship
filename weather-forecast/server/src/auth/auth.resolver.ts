import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from 'auth/dto/login.dto';
import { User } from 'user/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response.dto';
import { RefreshTokenResponse } from './dto/refresh-token-response.dto';
import { JwtAuthGuard } from './guards/jwt/jwt-auth.guard';
import { JwtRefreshAuthGuard } from './guards/jwt/jwt-refresh-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { TokenService } from './token.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
  ) {}

  @Mutation(returns => LoginResponse)
  @UseGuards(LocalAuthGuard)
  login(
    @Args('loginInput') loginInput: LoginInput,
    @Context() context,
  ): Promise<LoginResponse> {
    return this.authService.login(context.user);
  }

  @Mutation(returns => RefreshTokenResponse)
  @UseGuards(JwtRefreshAuthGuard)
  refresh(@Context() context): Promise<RefreshTokenResponse> {
    const { sub, refreshToken } = context.req.user;
    return this.tokenService.refresh(sub, refreshToken);
  }

  @Mutation(returns => LoginResponse)
  googleAuth(@Args('idToken') idToken: string): Promise<LoginResponse> {
    return this.authService.googleAuthorize(idToken);
  }

  @Mutation(returns => User)
  signup(@Args('signupInput') signupInput: LoginInput): Promise<User> {
    return this.authService.signup(signupInput);
  }

  @Mutation(returns => Boolean)
  @UseGuards(JwtAuthGuard)
  logout(@Context() context): Promise<boolean> {
    return this.authService.logout(context.req.user.sub);
  }
}
