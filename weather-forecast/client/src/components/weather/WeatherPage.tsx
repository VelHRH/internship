"use client";
import { Stack } from "@mui/material";
import { useContext } from "react";

import WeatherDataSection from "./WeatherDataSection";
import { WeatherContext } from "./WeatherProvider";
import WeatherTogglePanel from "./WeatherTogglePanel";

import Headline from "@/components/Headline";
import { useTranslations } from "next-intl";
import { ScreenTranslationKey } from "weather-forecast-common";

const WeatherPage = () => {
  const {
    location: { name, country },
  } = useContext(WeatherContext);
  const locationName = `${name}, ${country}`;
  const t = useTranslations();
  return (
    <Stack gap={5} alignItems="center">
      <Headline highlight={locationName}>
        {t(ScreenTranslationKey.FULL_WEATHER)}
      </Headline>
      <WeatherTogglePanel />
      <WeatherDataSection />
    </Stack>
  );
};

export default WeatherPage;
