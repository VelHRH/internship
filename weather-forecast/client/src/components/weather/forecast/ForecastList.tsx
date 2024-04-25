"use client";

import { Box } from "@mui/material";
import { useContext } from "react";

import ForecastTableHeader from "./ForecastTableHeader";

import ErrorTypography from "@/components/ui/ErrorTypography";
import { WeatherContext } from "@/components/weather/WeatherProvider";
import ForecastItem from "@/components/weather/forecast/ForecastItem";
import { useTranslations } from "next-intl";
import { ErrorTranslationKey } from "weather-forecast-common";

const ForecastList = () => {
  const { validForecasts } = useContext(WeatherContext);
  const t = useTranslations();

  if (validForecasts.length === 0) {
    return (
      <ErrorTypography>{t(ErrorTranslationKey.FORECAST_DATE)}</ErrorTypography>
    );
  }

  return (
    <Box display="flex" gap={3} flexDirection="column" width="100%">
      <ForecastTableHeader />
      {validForecasts.map((forecast) => (
        <ForecastItem key={forecast.time} forecast={forecast} />
      ))}
    </Box>
  );
};

export default ForecastList;
