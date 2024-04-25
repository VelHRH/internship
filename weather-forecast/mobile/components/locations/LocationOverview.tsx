import { useLanguage } from "@/components/TranslationProvider";
import { LocationItemContext } from "@/components/locations/LocationItemProvider";
import LocationOverwiewSection from "@/components/locations/LocationOverwiewSection";
import ImageIcon from "@/components/ui/ImageIcon";
import Spinner from "@/components/ui/Spinner";
import WeatherValue from "@/components/weather/WeatherValue";
import useGetWeather from "@/hooks/useGetWeather";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { SecondaryWeatherKey, units } from "weather-forecast-common";

const LocationOverview = () => {
  const { locationId } = useContext(LocationItemContext);
  const { current } = useGetWeather(locationId);
  const { i18n } = useLanguage();

  if (!current) {
    return <Spinner />;
  }

  return (
    <View>
      <View style={styles.mainInfo}>
        <ImageIcon icon={current.icon} style={{ width: "50%" }} />
        <WeatherValue
          value={current.temperature}
          units={units.temperature}
          size="medium"
        />
      </View>
      <LocationOverwiewSection title={i18n.t(SecondaryWeatherKey.HUMIDITY)}>
        <WeatherValue value={current.humidity} units={units.humidity} />
      </LocationOverwiewSection>
      <LocationOverwiewSection title={i18n.t(SecondaryWeatherKey.WIND)}>
        <WeatherValue value={current.wind.speed} units={units.wind} />
      </LocationOverwiewSection>
    </View>
  );
};

const styles = StyleSheet.create({
  mainInfo: {
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
    width: "100%",
    alignItems: "flex-start",
  },
});

export default LocationOverview;
