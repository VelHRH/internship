import { headers } from "next/headers";

import Ip from "@/constants/location/ipAdress";
import { IP_API_URL } from "@/constants/navigation/api_url";

type DefaultLocation = {
  name: string;
  country: string;
};

const defaultLocation = async (): Promise<DefaultLocation> => {
  const headersList = headers();
  const retrievedIp = headersList.get(Ip.HEADER);
  const ip =
    retrievedIp === Ip.LOCALHOST ? process.env.DEFAULT_IP : retrievedIp;
  const location = await fetch(`${IP_API_URL}${ip}`).then((res) => res.json());
  const { city, countryCode } = location;
  return {
    name: city,
    country: countryCode,
  };
};

export default defaultLocation;
