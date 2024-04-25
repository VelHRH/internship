"use client";
import { useParams, useSearchParams } from "next/navigation";
import { FC, PropsWithChildren, createContext } from "react";

import useGetWeather from "@/hooks/useGetWeather";

import { useTranslations } from "next-intl";
import {
  ButtonTranslationKey,
  WeatherQuery,
  formatDay,
  generatetoggleDates,
  reformatToggleButtonDate,
  translations,
} from "weather-forecast-common";

interface WeatherCtx {
  location: WeatherQuery["getWeather"]["location"];
  current: WeatherQuery["getWeather"]["current"];
  validForecasts: WeatherQuery["getWeather"]["forecasts"];
  currPageParam: string;
  togglePanelDates: string[];
}

export const WeatherContext = createContext({} as WeatherCtx);

interface WeatherProviderProps extends PropsWithChildren {
  defaultLocationId?: number;
}

const WeatherProvider: FC<WeatherProviderProps> = ({
  children,
  defaultLocationId,
}) => {
  const locationIdString = useParams<{ locationId: string }>().locationId;
  const locationId = defaultLocationId || parseInt(locationIdString);
  const t = useTranslations();
  const { current, forecasts, location } = useGetWeather(locationId);
  const searchParams = useSearchParams();
  const togglePanelDates = generatetoggleDates(
    forecasts[0].time,
    t(ButtonTranslationKey.NOW),
    t(ButtonTranslationKey.TODAY),
  );

  const currPageParam =
    searchParams.get("date") ||
    reformatToggleButtonDate(
      togglePanelDates[1],
      t(ButtonTranslationKey.NOW),
      t(ButtonTranslationKey.TODAY),
    );

  const currPageDate =
    currPageParam === translations.en[ButtonTranslationKey.TODAY]
      ? formatDay(new Date())
      : currPageParam;

  const validForecasts = forecasts.filter(
    (forecast) => formatDay(forecast.time) === currPageDate,
  );
  const value = {
    location,
    current,
    togglePanelDates,
    currPageParam,
    validForecasts,
  };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default WeatherProvider;
