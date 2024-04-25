import {
  SecondaryWeatherKey,
  SecondaryWeatherProperties,
} from '../translations/weather/properties';

export const units: SecondaryWeatherProperties = {
  [SecondaryWeatherKey.FEELSLIKE]: '°C',
  [SecondaryWeatherKey.TEMPERATURE]: '°C',
  [SecondaryWeatherKey.WIND]: 'm/s',
  [SecondaryWeatherKey.HUMIDITY]: '%',
  [SecondaryWeatherKey.PRESSURE]: 'mbar',
};
