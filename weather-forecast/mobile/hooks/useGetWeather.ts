import ToastType from "@/constants/toastTypes";
import { useQuery, useSubscription } from "@apollo/client";
import Toast from "react-native-toast-message";

import { GET_WEATHER, WEATHER_SUBSCRIPTION } from "weather-forecast-common";

const useGetWeather = (locationId: number) => {
  const { data, error, refetch, loading } = useQuery(GET_WEATHER, {
    variables: { locationId },
  });

  const { data: subscriptionData, error: subsctiptionError } = useSubscription(
    WEATHER_SUBSCRIPTION,
    {
      variables: { locationId },
      skip: !data,
    }
  );

  const weatherFetchError = error || subsctiptionError;

  if (weatherFetchError) {
    Toast.show({
      type: ToastType.ERROR,
      text1: weatherFetchError.message,
    });
  }

  const weather = subscriptionData
    ? subscriptionData.fetchedWeather
    : data?.getWeather;

  return { ...weather, refetch, loading };
};

export default useGetWeather;
