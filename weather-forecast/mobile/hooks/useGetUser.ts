import { AuthContext } from "@/components/auth/SessionProvider";
import ToastType from "@/constants/toastTypes";
import { useQuery } from "@apollo/client";
import "core-js/stable/atob";
import { useContext } from "react";
import Toast from "react-native-toast-message";
import { GET_USER } from "weather-forecast-common";

const useGetUser = () => {
  const { session } = useContext(AuthContext);
  const accesstoken = session ? JSON.parse(session).accesstoken : undefined;
  const sub = accesstoken
    ? JSON.parse(atob(accesstoken.split(".")[1])).sub
    : undefined;
  const id = sub ? parseInt(sub) : undefined;
  const { data, error, refetch, loading } = useQuery(GET_USER, {
    variables: { id },
  });

  if (error) {
    Toast.show({
      type: ToastType.ERROR,
      text1: error.message,
    });
  }

  return { user: data?.getUser, refetch, loading };
};

export default useGetUser;
