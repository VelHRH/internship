import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { LocationModule } from 'location/location.module';
import { CurrentWeather } from './entities/current-weather';
import { ForecastWeather } from './entities/forecast-weather';
import { Weather } from './entities/weather.entity';
import { WeatherApiService } from './services/weather-api.service';
import { WeatherService } from './services/weather.service';
import { WeatherResolver } from './weather.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Weather, ForecastWeather, CurrentWeather]),
    LocationModule,
  ],
  providers: [
    WeatherResolver,
    WeatherService,
    WeatherApiService,
    {
      provide: 'PUB_SUB',
      useValue: new RedisPubSub(),
    },
  ],
})
export class WeatherModule {}
