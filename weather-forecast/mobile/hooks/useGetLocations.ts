import ToastType from "@/constants/toastTypes";
import { useQuery } from "@apollo/client";
import Toast from "react-native-toast-message";

import { GET_LOCATIONS } from "weather-forecast-common";

const useGetLocations = (searchInput: string) => {
  const { data, error, loading, fetchMore } = useQuery(GET_LOCATIONS, {
    variables: { name: searchInput, offset: 0 },
  });

  if (error) {
    Toast.show({
      type: ToastType.ERROR,
      text1: error.message,
    });
  }
  return { locations: data?.locations, loading, fetchMore };
};

export default useGetLocations;
