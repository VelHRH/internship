import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WEATHER_API_DATA_STALE_IN } from 'constants/weather';
import { isBefore, subHours } from 'date-fns';
import { LocationService } from 'location/location.service';
import { Repository } from 'typeorm';
import { Weather } from 'weather/entities/weather.entity';
import { WeatherApiService } from './weather-api.service';

@Injectable()
export class WeatherService {
  constructor(
    @InjectRepository(Weather)
    private readonly weatherRepository: Repository<Weather>,
    private readonly weatherApiService: WeatherApiService,
    private readonly locationService: LocationService,
  ) {}

  async find(locationId: number): Promise<Weather | null> {
    const weather = await this.weatherRepository.findOne({
      where: {
        location: { id: locationId },
      },
      relations: ['location'],
    });

    return weather;
  }
  async get(locationId: number): Promise<Weather> {
    const weather = await this.find(locationId);
    if (!weather) {
      return this.create(locationId);
    }

    const staleDate = subHours(new Date(), WEATHER_API_DATA_STALE_IN);

    if (isBefore(weather.updatedAt, staleDate)) {
      return this.update(weather);
    }
    weather.forecasts = weather.forecasts.map(forecast => {
      forecast.time = new Date(forecast.time);
      return forecast;
    });
    return weather;
  }

  async create(locationId: number): Promise<Weather> {
    const location = await this.locationService.get(locationId);
    const weather = new Weather();
    weather.location = location;
    return this.update(weather);
  }

  async update(weather: Weather): Promise<Weather> {
    weather.current = await this.weatherApiService.fetchCurrent(weather);
    weather.forecasts = await this.weatherApiService.fetchForecast(weather);
    weather.updatedAt = new Date();
    return this.weatherRepository.save(weather);
  }
}
