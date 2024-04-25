import { graphql } from '../__generated__';

graphql(`
  fragment LocationFields on Location {
    id
    name
    country
    state
    lat
    lon
    stars
  }
`);

graphql(`
  fragment UserSettingsFields on UserSettings {
    theme
    locationNumber
    language
  }
`);

graphql(`
  fragment WindFields on Wind {
    speed
    deg
  }
`);

graphql(`
  fragment CurrentWeatherFields on CurrentWeather {
    name
    icon
    temperature
    feelsLike
    pressure
    humidity
    wind {
      ...WindFields
    }
  }
`);

graphql(`
  fragment ForecastWeatherFields on ForecastWeather {
    name
    icon
    temperature
    feelsLike
    pressure
    humidity
    wind {
      ...WindFields
    }
    time
  }
`);

graphql(`
  fragment WeatherFields on Weather {
    id
    location {
      name
      country
    }
    updatedAt
    current {
      ...CurrentWeatherFields
    }
    forecasts {
      ...ForecastWeatherFields
    }
  }
`);
