import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginInput } from 'auth/dto/login.dto';
import { User } from 'user/entities/user.entity';
import { UserService } from 'user/user.service';
import { ErrorTranslationKey, translations } from 'weather-forecast-common';
import { LoginResponse } from './dto/login-response.dto';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly tokenService: TokenService,
  ) {}

  async validateUser(loginInput: LoginInput): Promise<User | null> {
    const { email, password: pass } = loginInput;
    const user = await this.userService.findByEmail(email);
    if (!user) {
      return null;
    }
    const isValidPassword = await this.userService.comparePasswords(
      pass,
      user.password,
    );
    if (isValidPassword) {
      return user;
    }
    return null;
  }

  async login(user: User): Promise<LoginResponse> {
    const { id, email } = user;
    const tokens = this.tokenService.createTokens(id, email);
    const expiresin = this.jwtService.decode(tokens.accesstoken).exp * 1000;
    await this.tokenService.updateRefreshToken(id, tokens.refreshtoken);
    return {
      ...user,
      ...tokens,
      expiresin,
    };
  }

  async logout(userId: number): Promise<boolean> {
    this.userService.update(userId, { refreshtoken: undefined });
    return true;
  }

  async signup(signupInput: LoginInput): Promise<User> {
    return this.userService.create(signupInput);
  }

  async googleAuthorize(idToken: string): Promise<LoginResponse> {
    const tokenVetifyApi = process.env.GOOGLE_TOKEN_VERIFY_API;
    const payload = await fetch(`${tokenVetifyApi}${idToken}`).then(r =>
      r.json(),
    );
    const { email, email_verified, sub: googleId } = payload;
    if (!email_verified) {
      throw new UnauthorizedException(
        translations.en[ErrorTranslationKey.WRONG_GOOGLE_TOKEN],
      );
    }
    let user = await this.userService.findByEmail(email);
    if (!user) {
      user = await this.userService.create({ email, googleId });
    }
    if (user.googleId !== googleId) {
      user = await this.userService.update(user.id, { googleId });
    }
    return this.login(user);
  }
}
