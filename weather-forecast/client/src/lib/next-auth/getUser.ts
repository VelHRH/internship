import { getClient } from "@/lib/apollo/getClient";
import { authOptions } from "@/lib/next-auth/authOptions";
import { getServerSession } from "next-auth";
import { GET_USER } from "weather-forecast-common";

const getUser = async () => {
  const session = await getServerSession(authOptions);

  const {
    data: { getUser: user },
    error,
  } = await getClient().query({
    query: GET_USER,
    variables: { id: session?.id },
  });

  if (error) {
    throw error;
  }
  return user;
};

export default getUser;
