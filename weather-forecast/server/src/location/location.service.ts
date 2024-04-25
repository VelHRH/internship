import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationsFetch } from 'constants/locations';
import { Like, Repository } from 'typeorm';
import { UserLocationInput } from 'user/dto/user-location.dto';
import { UserService } from 'user/user.service';
import { ErrorTranslationKey, translations } from 'weather-forecast-common';
import { CreateLocationInput } from './dto/create-location.dto';
import { LocationsInput } from './dto/locations-input.dto';
import { NameCountryInput } from './dto/name-country-input.dto';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
    private userService: UserService,
  ) {}

  async list({ name, limit, offset }: LocationsInput): Promise<Location[]> {
    if (name === '') {
      return [];
    }
    if (name === null) name = '';
    const locations = await this.locationRepository.find({
      where: [
        { name: Like(`%${name}%`) },
        { country: Like(`%${name}%`) },
        { state: Like(`%${name}%`) },
      ],
      order: { id: 'ASC' },
      skip: offset,
    });
    return locations.slice(0, limit);
  }

  get(id: number): Promise<Location> {
    return this.locationRepository.findOneOrFail({
      where: { id },
      relations: ['users'],
    });
  }

  listTop(): Promise<Location[]> {
    return this.locationRepository.find({
      order: { stars: 'DESC' },
      take: LocationsFetch.TOP,
    });
  }

  create(createLocationInput: CreateLocationInput): Promise<Location> {
    const newLocation = this.locationRepository.create(createLocationInput);
    return this.locationRepository.save(newLocation);
  }

  async addUserLocation(
    userLocationInput: UserLocationInput,
  ): Promise<Location> {
    const { userId, locationId } = userLocationInput;
    const user = await this.userService.get(userId);
    if (!user) {
      throw new UnauthorizedException();
    }
    if (user.locations.length === user.userSettings.locationNumber) {
      throw new BadRequestException(
        translations.en[ErrorTranslationKey.LOCATION_LIMIT],
      );
    }
    const location = await this.get(locationId);
    if (!location.users) {
      location.users = [];
    }
    location.users.push(user);
    location.stars++;
    return await this.locationRepository.save(location);
  }

  async getByNameCountry(
    nameCountryInput: NameCountryInput,
  ): Promise<Location> {
    const { name, country } = nameCountryInput;
    return this.locationRepository.findOneByOrFail({ name, country });
  }

  async removeUserLocation(
    userLocationInput: UserLocationInput,
  ): Promise<Location> {
    const { userId, locationId } = userLocationInput;
    const location = await this.get(locationId);
    const index = location.users.findIndex(user => user.id === userId);
    if (index === -1) {
      return location;
    }
    location.users.splice(index, 1);
    location.stars--;
    return await this.locationRepository.save(location);
  }
}
