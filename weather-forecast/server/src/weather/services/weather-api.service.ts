import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { FetchWeatherMode } from 'constants/weather';
import { Location } from 'location/entities/location.entity';
import { CurrentWeather } from 'weather/entities/current-weather';
import { ForecastWeather } from 'weather/entities/forecast-weather';
import { Weather } from 'weather/entities/weather.entity';

@Injectable()
export class WeatherApiService {
  async fetchForecast(weather: Weather): Promise<ForecastWeather[]> {
    const data = await this.fetchWeather(
      weather.location,
      FetchWeatherMode.FORECAST,
    );
    const forecasts = data.list.map(
      (forecast): ForecastWeather => ({
        ...this.addWeatherOptions(forecast),
        time: new Date(forecast.dt * 1000),
      }),
    ) as ForecastWeather[];

    return forecasts;
  }

  async fetchCurrent(weather: Weather): Promise<CurrentWeather> {
    const data = await this.fetchWeather(
      weather.location,
      FetchWeatherMode.CURRENT,
    );

    return this.addWeatherOptions(data);
  }

  protected addWeatherOptions(data: any): CurrentWeather {
    return {
      name: data.weather[0].description,
      icon: data.weather[0].icon,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      pressure: Math.round(data.main.pressure),
      humidity: Math.round(data.main.humidity),
      wind: { ...data.wind, speed: Math.round(data.wind.speed) },
    } as CurrentWeather;
  }

  protected async fetchWeather(location: Location, mode: FetchWeatherMode) {
    const { lat, lon } = location;

    const queryParams = {
      lat: lat.toString(),
      lon: lon.toString(),
      appid: process.env.WEATHER_API_KEY!,
      units: 'metric',
    };

    const queryString = new URLSearchParams(queryParams);

    const response = await fetch(
      `${process.env.WEATHER_API_URL}${mode}?${queryString}`,
    );
    if (!response.ok) {
      throw new ServiceUnavailableException();
    }

    return response.json();
  }
}
