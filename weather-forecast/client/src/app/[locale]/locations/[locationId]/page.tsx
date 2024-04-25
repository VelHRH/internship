import Loading from "@/components/ui/Loading";
import WeatherPage from "@/components/weather/WeatherPage";
import WeatherProvider from "@/components/weather/WeatherProvider";
import NavigationLink from "@/constants/navigation/links";
import { authOptions } from "@/lib/next-auth/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const LocationWeather = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect(NavigationLink.LOGIN);
  }
  return (
    <Suspense fallback={<Loading />}>
      <WeatherProvider>
        <WeatherPage />
      </WeatherProvider>
    </Suspense>
  );
};

export default LocationWeather;
