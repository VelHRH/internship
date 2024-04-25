import ImageIcon from "@/components/ui/ImageIcon";
import Text from "@/components/ui/text/Text";
import WeatherValue from "@/components/weather/WeatherValue";
import FontSize from "@/constants/fontSizes";
import ScreenLink from "@/constants/screenlinks";
import useCustomTheme from "@/hooks/useCustomTheme";

import { router, useLocalSearchParams } from "expo-router";
import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  ArrayElement,
  WeatherQuery,
  formatTime,
  units,
} from "weather-forecast-common";

interface ForecastPreviewItemProps
  extends ArrayElement<WeatherQuery["getWeather"]["forecasts"]> {}

const ForecastPreviewItem: FC<ForecastPreviewItemProps> = (forecast) => {
  const { temperature, icon, time } = forecast;

  const { id } = useLocalSearchParams();

  const { palette } = useCustomTheme();
  const borderColor = palette.primary.main;
  return (
    <TouchableOpacity
      style={{
        ...styles.item,
        borderColor,
      }}
      onPress={() => router.push(`${id}${ScreenLink.FORECAST_WEATHER}`)}
    >
      <ImageIcon icon={icon} style={{ height: 30 }} />
      <Text style={styles.timeText}>{formatTime(time)}</Text>
      <WeatherValue value={temperature} units={units.temperature} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
    paddingBottom: 3,
    alignItems: "center",
    gap: 10,
    width: 80,
  },
  timeText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: FontSize.SMALL,
  },
});

export default ForecastPreviewItem;
