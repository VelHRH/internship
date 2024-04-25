import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { GET_USER } from "weather-forecast-common";

const useGetUser = () => {
  const { data: session } = useSession();
  const { data, error } = useQuery(GET_USER, {
    variables: { id: session?.id },
  });
  if (error) {
    throw error;
  }

  return data?.getUser;
};

export default useGetUser;
