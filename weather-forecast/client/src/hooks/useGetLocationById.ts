import { useSuspenseQuery } from "@apollo/client";

import { GET_LOCATION_BY_ID } from "weather-forecast-common";

const useGetLocationById = (id: number) => {
  const { data, error } = useSuspenseQuery(GET_LOCATION_BY_ID, {
    variables: { id },
  });

  if (error) {
    throw error;
  }

  return data.getLocation;
};

export default useGetLocationById;
