"use client";
import { useContext } from "react";

import { ButtonTranslationKey, translations } from "weather-forecast-common";
import { WeatherContext } from "./WeatherProvider";
import CurrentWeather from "./current/CurrentWeather";
import ForecastList from "./forecast/ForecastList";

const WeatherDataSection = () => {
  const { currPageParam } = useContext(WeatherContext);
  if (currPageParam === translations.en[ButtonTranslationKey.NOW]) {
    return <CurrentWeather />;
  }
  return <ForecastList />;
};

export default WeatherDataSection;
