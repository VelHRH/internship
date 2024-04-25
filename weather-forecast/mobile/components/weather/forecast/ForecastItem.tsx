import { useLanguage } from "@/components/TranslationProvider";
import Divider from "@/components/ui/Divider";
import ImageIcon from "@/components/ui/ImageIcon";
import Text from "@/components/ui/text/Text";
import WeatherValue from "@/components/weather/WeatherValue";
import DetailsSection from "@/components/weather/current/DetailsSection";
import FontSize from "@/constants/fontSizes";
import IconSize from "@/constants/iconSizes";
import useCustomTheme from "@/hooks/useCustomTheme";
import {
  AntDesign,
  Entypo,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import {
  ArrayElement,
  SecondaryWeatherKey,
  WeatherQuery,
  formatDayTime,
  units,
} from "weather-forecast-common";

interface ForecastItemProps
  extends ArrayElement<WeatherQuery["getWeather"]["forecasts"]> {}

const ForecastItem: FC<ForecastItemProps> = (forecast) => {
  const { time, icon, temperature, feelsLike, wind, humidity, pressure } =
    forecast;
  const { i18n } = useLanguage();

  const { palette } = useCustomTheme();
  const color = palette.text.secondary;
  const borderColor = palette.primary.main;
  return (
    <View style={styles.container}>
      <View style={styles.headingInfo}>
        <ImageIcon icon={icon} style={{ width: "12%" }} />
        <Text style={styles.dateText}>{formatDayTime(time)}</Text>
        <View style={styles.temperatureContainer}>
          <WeatherValue value={temperature} units={units.temperature} />
          <Text>/</Text>
          <WeatherValue value={feelsLike} units={units.feelsLike} />
        </View>
      </View>
      <View style={{ ...styles.detailsInfo, borderColor }}>
        <DetailsSection
          title={i18n.t(SecondaryWeatherKey.HUMIDITY)}
          icon={
            <Entypo name="drop" size={IconSize.SUPER_SMALL} color={color} />
          }
        >
          <WeatherValue value={humidity} units={units.humidity} />
        </DetailsSection>
        <Divider rotate="vertical" />
        <DetailsSection
          title={i18n.t(SecondaryWeatherKey.WIND)}
          icon={
            <FontAwesome6
              name="wind"
              size={IconSize.SUPER_SMALL}
              color={color}
            />
          }
        >
          <WeatherValue
            value={wind.speed}
            units={units.wind}
            additionalIcon={
              <AntDesign
                name="arrowup"
                size={IconSize.SMALL}
                color={color}
                style={{ transform: [{ rotate: `${wind.deg}deg` }] }}
              />
            }
          />
        </DetailsSection>
        <Divider rotate="vertical" />
        <DetailsSection
          title={i18n.t(SecondaryWeatherKey.PRESSURE)}
          icon={
            <MaterialIcons
              name="compress"
              size={IconSize.SUPER_SMALL}
              color={color}
            />
          }
        >
          <WeatherValue value={pressure} units={units.pressure} />
        </DetailsSection>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
    marginBottom: 30,
  },
  headingInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: FontSize.MEDIUM,
  },
  temperatureContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  detailsInfo: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 2,
    borderRadius: 30,
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ForecastItem;
