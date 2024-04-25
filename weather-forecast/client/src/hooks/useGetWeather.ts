import { useSubscription, useSuspenseQuery } from "@apollo/client";

import { GET_WEATHER, WEATHER_SUBSCRIPTION } from "weather-forecast-common";

const useGetWeather = (locationId: number) => {
  const { data, error } = useSuspenseQuery(GET_WEATHER, {
    variables: { locationId },
  });
  const { data: subscriptionData, error: subsctiptionError } = useSubscription(
    WEATHER_SUBSCRIPTION,
    {
      variables: { locationId },
      skip: !data,
    },
  );

  if (error || subsctiptionError) {
    throw error;
  }

  const weather = subscriptionData
    ? subscriptionData.fetchedWeather
    : data.getWeather;

  return { ...weather };
};

export default useGetWeather;
