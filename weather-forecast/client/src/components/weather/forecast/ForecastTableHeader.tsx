import { Box, Grid } from "@mui/material";
import { useTranslations } from "next-intl";

import {
  ScreenTranslationKey,
  SecondaryWeatherKey,
  units,
} from "weather-forecast-common";

const ForecastTableHeader = () => {
  const t = useTranslations();
  return (
    <Box display="flex" gap={3} justifyItems="flex-start" px={3}>
      <Grid xs={true}>{t(ScreenTranslationKey.TIME)}</Grid>
      <Grid xs={true}>{t(ScreenTranslationKey.WEATHER)}</Grid>
      <Grid xs={true}>
        {t(SecondaryWeatherKey.TEMPERATURE)} ({units.temperature})
      </Grid>
      <Grid xs={true}>
        {t(SecondaryWeatherKey.FEELSLIKE)} ({units.feelsLike})
      </Grid>
      <Grid xs={true}>
        {t(SecondaryWeatherKey.HUMIDITY)} ({units.humidity})
      </Grid>
      <Grid xs={true}>
        {t(SecondaryWeatherKey.PRESSURE)} ({units.pressure})
      </Grid>
      <Grid xs={true}>
        {t(SecondaryWeatherKey.WIND)} ({units.wind})
      </Grid>
    </Box>
  );
};
export default ForecastTableHeader;
