import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Location } from 'location/entities/location.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from 'user/dto/create-user.dto';
import { UpdatePasswordInput } from 'user/dto/update-password.dto';
import { UpdateUserInput } from 'user/dto/update-user.dto';
import { UserSettingsInput } from 'user/dto/user-settings.dto';
import { User } from 'user/entities/user.entity';
import {
  DEFAULT_LANGUAGE,
  DEFAULT_THEME,
  ErrorTranslationKey,
  LocationNumber,
  translations,
} from 'weather-forecast-common';
import { GetUserResponse } from './dto/get-user-response.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const existing = await this.findByEmail(createUserInput.email);
    if (existing) {
      throw new BadRequestException(
        translations.en[ErrorTranslationKey.DUPLICATE_EMAIL],
      );
    }
    const userSettings: UserSettingsInput = {
      theme: DEFAULT_THEME,
      locationNumber: LocationNumber.DEFAULT,
      language: DEFAULT_LANGUAGE,
    };
    const passwordHash =
      createUserInput.password &&
      (await this.hashPassword(createUserInput.password));
    const newUser = this.userRepository.create({
      ...createUserInput,
      userSettings,
      password: passwordHash,
    });
    return this.userRepository.save(newUser);
  }

  async get(id?: number): Promise<GetUserResponse | null> {
    if (!id) {
      return null;
    }
    const user = await this.userRepository.findOne({
      where: { id },
      select: [
        'id',
        'email',
        'googleId',
        'password',
        'refreshtoken',
        'locations',
        'userSettings',
      ],
      relations: ['locations', 'userSettings'],
    });
    if (!user) {
      return null;
    }
    return { ...user, hasPassword: !!user.password };
  }

  findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'googleId', 'password', 'refreshtoken'],
    });
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.get(id);
    if (!user) {
      throw new NotFoundException();
    }
    const { password, ...rest } = updateUserInput;
    const userSettings = { ...user.userSettings, ...rest.userSettings };
    if (!password) {
      return this.userRepository.save({
        ...user,
        ...rest,
        userSettings,
      });
    }
    const passwordHash = await this.updatePassword(password, user.password);
    return this.userRepository.save({
      ...user,
      ...rest,
      password: passwordHash,
      userSettings,
    });
  }

  async getUserLocations(id: number): Promise<Location[]> {
    const userWithLocations = await this.get(id);
    return userWithLocations!.locations;
  }

  async comparePasswords(
    password: string,
    userPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, userPassword);
  }

  private async updatePassword(
    password: UpdatePasswordInput,
    currPassword: string,
  ): Promise<string> {
    const { newPassword, oldPassword } = password;

    if (!oldPassword) {
      return this.hashPassword(password.newPassword!);
    }

    if (!(await this.comparePasswords(oldPassword, currPassword))) {
      throw new BadRequestException(
        translations.en[ErrorTranslationKey.WRONG_PASSWORD],
      );
    }
    return this.hashPassword(newPassword!);
  }

  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
}
