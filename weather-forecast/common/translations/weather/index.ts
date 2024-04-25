import { Language, Translations } from '../languages';
import { SecondaryWeatherKey } from './properties';

export { SecondaryWeatherKey } from './properties';

export const weatherTranslations: Translations<SecondaryWeatherKey> = {
  [Language.ENGLISH]: {
    [SecondaryWeatherKey.FEELSLIKE]: 'Feels like',
    [SecondaryWeatherKey.TEMPERATURE]: 'Temperature',
    [SecondaryWeatherKey.HUMIDITY]: 'Humidity',
    [SecondaryWeatherKey.WIND]: 'Wind',
    [SecondaryWeatherKey.PRESSURE]: 'Pressure',
  },
  [Language.UKRAINIAN]: {
    [SecondaryWeatherKey.FEELSLIKE]: 'Відчувається',
    [SecondaryWeatherKey.TEMPERATURE]: 'Температура',
    [SecondaryWeatherKey.HUMIDITY]: 'Вологість',
    [SecondaryWeatherKey.WIND]: 'Вітер',
    [SecondaryWeatherKey.PRESSURE]: 'Тиск',
  },
};
