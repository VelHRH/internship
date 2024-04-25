"use client";

import { Air, DeviceThermostat } from "@mui/icons-material";
import { Grid, useTheme } from "@mui/material";
import { useContext } from "react";

import CurrentWeatherItem from "./CurrentWeatherItem";

import WeatherIcon from "@/components/weather/WeatherIcon";
import { WeatherContext } from "@/components/weather/WeatherProvider";
import Wind from "@/components/weather/Wind";
import Icons from "@/constants/icons";
import { useTranslations } from "next-intl";
import {
  ExtendedTheme,
  SecondaryWeatherKey,
  units,
} from "weather-forecast-common";

const CurrentWeather = () => {
  const { toolbarStyles } = useTheme<ExtendedTheme>();
  const {
    current,
    location: { name, country },
  } = useContext(WeatherContext);
  const locationName = `${name}, ${country}`;
  const t = useTranslations();
  return (
    <Grid
      container
      spacing={5}
      width="100%"
      sx={{ ...toolbarStyles, p: 5, borderRadius: 5, mt: 5 }}
      alignItems="center"
    >
      <CurrentWeatherItem value={locationName} />
      <CurrentWeatherItem
        value={current.name}
        icon={<WeatherIcon name={current.name} icon={current.icon} />}
      />
      <CurrentWeatherItem
        value={current.temperature}
        icon={<DeviceThermostat sx={{ fontSize: "70px" }} />}
        unit={units.temperature}
      />
      <CurrentWeatherItem
        icon={Icons.feelsLike}
        value={current.feelsLike}
        description={t(SecondaryWeatherKey.FEELSLIKE)}
        unit={units.feelsLike}
      />
      <CurrentWeatherItem
        icon={Icons.pressure}
        value={current.pressure}
        description={t(SecondaryWeatherKey.PRESSURE)}
        unit={units.pressure}
      />
      <CurrentWeatherItem
        icon={Icons.humidity}
        value={current.humidity}
        description={t(SecondaryWeatherKey.HUMIDITY)}
        unit={units.humidity}
      />
      <CurrentWeatherItem
        value={<Wind {...current.wind} units />}
        icon={<Air />}
        description={t(SecondaryWeatherKey.WIND)}
      />
    </Grid>
  );
};

export default CurrentWeather;
