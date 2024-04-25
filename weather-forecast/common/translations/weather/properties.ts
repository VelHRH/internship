export enum SecondaryWeatherKey {
  FEELSLIKE = 'feelsLike',
  TEMPERATURE = 'temperature',
  PRESSURE = 'pressure',
  HUMIDITY = 'humidity',
  WIND = 'wind',
}

export type SecondaryWeatherProperties = Record<SecondaryWeatherKey, string>;
