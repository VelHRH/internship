import { useSuspenseQuery } from "@apollo/client";

import { GET_LOCATION_BY_NAME_COUNTRY } from "weather-forecast-common";

const useGetLocationByName = (name: string, country: string) => {
  const { data, error } = useSuspenseQuery(GET_LOCATION_BY_NAME_COUNTRY, {
    variables: { name, country },
  });

  if (error) {
    throw error;
  }

  return data.getLocationByNameCountry;
};

export default useGetLocationByName;
