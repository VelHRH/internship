import { useLanguage } from "@/components/TranslationProvider";
import Text from "@/components/ui/text/Text";
import { WeatherContext } from "@/components/weather/WeatherProvider";
import ForecastPreviewItem from "@/components/weather/forecast/ForecastPreviewItem";
import FontSize from "@/constants/fontSizes";
import IconSize from "@/constants/iconSizes";
import ScreenLink from "@/constants/screenlinks";
import useCustomTheme from "@/hooks/useCustomTheme";
import { Entypo } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  ButtonTranslationKey,
  ScreenTranslationKey,
} from "weather-forecast-common";

const ForecastPreview = () => {
  const { forecasts } = useContext(WeatherContext);
  const { id } = useLocalSearchParams();
  const previewForecasts = forecasts?.slice(0, 4);

  const { i18n } = useLanguage();

  const { palette } = useCustomTheme();
  const color = palette.text.primary;
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>
          {i18n.t(ScreenTranslationKey.FORECAST)}:
        </Text>
        <TouchableOpacity
          onPress={() => router.push(`${id}${ScreenLink.FORECAST_WEATHER}`)}
        >
          <View style={styles.link}>
            <Text style={styles.linkText}>
              {i18n.t(ButtonTranslationKey.FORECAST)}
            </Text>
            <Entypo
              name="chevron-small-right"
              size={IconSize.BIG}
              color={color}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.previewContainer}>
        {previewForecasts?.map((forecast) => (
          <ForecastPreviewItem key={forecast.time} {...forecast} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  previewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  headingText: {
    fontFamily: "Montserrat-Bold",
    fontSize: FontSize.MEDIUM,
  },
  linkText: {
    fontSize: FontSize.SMALL,
  },
});

export default ForecastPreview;
