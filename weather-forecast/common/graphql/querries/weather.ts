import { graphql } from '../__generated__';

export const GET_WEATHER = graphql(`
  query Weather($locationId: Int!) {
    getWeather(locationId: $locationId) {
      ...WeatherFields
    }
  }
`);

export const WEATHER_SUBSCRIPTION = graphql(`
  subscription SubscribeToFetchedForecast($locationId: Int!) {
    fetchedWeather(locationId: $locationId) {
      ...WeatherFields
    }
  }
`);
