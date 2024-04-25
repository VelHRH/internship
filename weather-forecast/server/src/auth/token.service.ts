import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenDuration } from 'constants/auth';
import { UserService } from 'user/user.service';
import { JwtPayload } from './dto/jwt-payload.dto';
import { RefreshTokenResponse } from './dto/refresh-token-response.dto';

@Injectable()
export class TokenService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async refresh(
    userId: number,
    refreshtoken: string,
  ): Promise<RefreshTokenResponse> {
    const user = await this.userService.get(userId);
    if (!user || !user.refreshtoken || refreshtoken !== user.refreshtoken) {
      throw new ForbiddenException();
    }

    const tokens = this.createTokens(userId, user.email);
    const expiresin = this.jwtService.decode(tokens.accesstoken).exp * 1000;
    await this.updateRefreshToken(userId, tokens.refreshtoken);
    return { ...tokens, expiresin };
  }

  async updateRefreshToken(
    userId: number,
    refreshtoken: string,
  ): Promise<void> {
    this.userService.update(userId, { refreshtoken });
  }

  createTokens(
    userId: number,
    email: string,
  ): Omit<RefreshTokenResponse, 'expiresin'> {
    const payload: JwtPayload = { sub: userId, username: email };
    const accesstoken = this.createToken(
      payload,
      TokenDuration.ACCESS_TOKEN,
      process.env.JWT_SECRET!,
    );

    const refreshtoken = this.createToken(
      payload,
      TokenDuration.REFRESH_TOKEN,
      process.env.JWT_REFRESH_SECRET!,
    );

    return { accesstoken, refreshtoken };
  }

  private createToken(
    payload: JwtPayload,
    expiresin: string | number,
    secret: string,
  ): string {
    return this.jwtService.sign(payload, {
      expiresIn: expiresin,
      secret,
    });
  }
}
