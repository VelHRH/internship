import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthStrategyName } from 'constants/auth';
import { Strategy } from 'passport-local';
import { User } from 'user/entities/user.entity';
import { ErrorTranslationKey, translations } from 'weather-forecast-common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(
  Strategy,
  AuthStrategyName.LOCAL,
) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<User> {
    const user = await this.authService.validateUser({ email, password });
    if (!user) {
      throw new UnauthorizedException(
        translations.en[ErrorTranslationKey.WRONG_CREDENTIALS],
      );
    }
    return user;
  }
}
