"use client";
import { Stack } from "@mui/material";
import { FC } from "react";

import CurrentWeather from "./current/CurrentWeather";
import WeatherProvider from "./WeatherProvider";

import Link from "@/components/ui/Link";
import NavigationLink from "@/constants/navigation/links";
import useGetLocationByName from "@/hooks/useGetLocationByName";
import { useTranslations } from "next-intl";
import { ScreenTranslationKey } from "weather-forecast-common";

interface DefaultWeatherProps {
  name: string;
  country: string;
}

const DefaultWeather: FC<DefaultWeatherProps> = ({ name, country }) => {
  const location = useGetLocationByName(name, country);
  const locationHref = `${NavigationLink.LOCATIONS}/${location.id.toString()}`;
  const t = useTranslations();
  return (
    <WeatherProvider defaultLocationId={location.id}>
      <Stack gap={5} alignItems="center">
        <CurrentWeather />
        <Link href={locationHref} animate>
          {t(ScreenTranslationKey.SEE_FORECAST)}
        </Link>
      </Stack>
    </WeatherProvider>
  );
};

export default DefaultWeather;
