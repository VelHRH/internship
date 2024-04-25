import { Divider, Stack } from "@mui/material";

import Headline from "@/components/Headline";
import UserLocation from "@/components/locations/UserLocation";
import DefaultWeather from "@/components/weather/DefaultWeather";
import defaultLocation from "@/lib/utils/defaultLocation";
import { getTranslations } from "next-intl/server";
import { ScreenTranslationKey } from "weather-forecast-common";

const HomePage = async () => {
  const location = await defaultLocation();
  const t = await getTranslations();
  return (
    <Stack gap={5}>
      <Headline highlight={location.name}>
        {t(ScreenTranslationKey.MAIN_HEADLINE)}
      </Headline>
      <DefaultWeather {...location} />
      <Divider />
      <UserLocation />
    </Stack>
  );
};

export default HomePage;
