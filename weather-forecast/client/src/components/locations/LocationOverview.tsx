import { Typography } from "@mui/material";
import { FC, useContext } from "react";

import ItemSection from "@/components/locations/ItemSection";
import { LocationItemContext } from "@/components/locations/LocationItem";
import WeatherIcon from "@/components/weather/WeatherIcon";
import Wind from "@/components/weather/Wind";
import useGetWeather from "@/hooks/useGetWeather";
import { useTranslations } from "next-intl";
import { SecondaryWeatherKey, units } from "weather-forecast-common";

const LocationOverview: FC = () => {
  const { locationId } = useContext(LocationItemContext);
  const { current } = useGetWeather(locationId);
  const t = useTranslations();
  return (
    <>
      <WeatherIcon name={current.name} icon={current.icon} size={50} />
      <ItemSection title={t(SecondaryWeatherKey.TEMPERATURE)}>
        <Typography>
          {current.temperature}
          {units.temperature}
        </Typography>
      </ItemSection>

      <ItemSection title={t(SecondaryWeatherKey.HUMIDITY)}>
        <Typography>
          {current.humidity}
          {units.humidity}
        </Typography>
      </ItemSection>

      <ItemSection title={t(SecondaryWeatherKey.WIND)}>
        <Wind {...current.wind} />
      </ItemSection>
    </>
  );
};

export default LocationOverview;
