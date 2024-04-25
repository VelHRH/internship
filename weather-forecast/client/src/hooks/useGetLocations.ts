import { useQuery } from "@apollo/client";

import { GET_LOCATIONS } from "weather-forecast-common";

const useGetLocations = (searchInput: string) => {
  const { data, error, loading, fetchMore } = useQuery(GET_LOCATIONS, {
    variables: { name: searchInput, offset: 0 },
  });

  if (error) {
    throw error;
  }
  return { locations: data?.locations, loading, fetchMore };
};

export default useGetLocations;
