import { Inject } from '@nestjs/common';
import { Args, Int, Query, Resolver, Subscription } from '@nestjs/graphql';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { Weather } from './entities/weather.entity';
import { WeatherService } from './services/weather.service';

@Resolver(of => Weather)
export class WeatherResolver {
  constructor(
    @Inject('PUB_SUB') private readonly pubSub: RedisPubSub,
    private readonly weatherService: WeatherService,
  ) {}

  @Query(returns => Weather)
  async getWeather(
    @Args('locationId', { type: () => Int }) locationId: number,
  ): Promise<Weather> {
    const weather = await this.weatherService.get(locationId);
    this.pubSub.publish(TriggerName.FETCHED_WEATHER, {
      [TriggerName.FETCHED_WEATHER]: weather,
    });
    return weather;
  }

  @Subscription(returns => Weather, {
    name: TriggerName.FETCHED_WEATHER,
    filter: (payload, variables) =>
      payload[TriggerName.FETCHED_WEATHER].location.id === variables.locationId,
  })
  subscribeToFetchedForecast(
    @Args('locationId', { type: () => Int }) locationId: number,
  ) {
    return this.pubSub.asyncIterator(TriggerName.FETCHED_WEATHER);
  }
}
