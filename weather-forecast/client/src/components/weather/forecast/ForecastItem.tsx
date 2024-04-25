import { Box, Grid, useTheme } from "@mui/material";
import { FC } from "react";

import WeatherIcon from "@/components/weather/WeatherIcon";
import Wind from "@/components/weather/Wind";
import {
  ArrayElement,
  ExtendedTheme,
  WeatherQuery,
  formatTime,
} from "weather-forecast-common";

interface ForecastItemProps {
  forecast: ArrayElement<WeatherQuery["getWeather"]["forecasts"]>;
}

const ForecastItem: FC<ForecastItemProps> = ({ forecast }) => {
  const { icon, temperature, feelsLike, pressure, humidity, wind, name } =
    forecast;
  const { toolbarStyles } = useTheme<ExtendedTheme>();
  return (
    <Box
      display="flex"
      gap={3}
      justifyItems="flex-start"
      alignItems="center"
      sx={{ ...toolbarStyles, p: 3, borderRadius: 2 }}
    >
      <Grid xs={true}>{formatTime(forecast.time)}</Grid>
      <Grid item xs={true}>
        <WeatherIcon {...{ name, icon }} size={50} />
      </Grid>
      <Grid item xs={true}>
        {temperature}
      </Grid>
      <Grid item xs={true}>
        {feelsLike}
      </Grid>
      <Grid item xs={true}>
        {pressure}
      </Grid>
      <Grid item xs={true}>
        {humidity}
      </Grid>
      <Grid item xs={true}>
        <Wind {...wind} />
      </Grid>
    </Box>
  );
};

export default ForecastItem;
