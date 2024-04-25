import WeatherProvider from "@/components/weather/WeatherProvider";
import CurrentWeather from "@/components/weather/current/CurrentWeather";
import ForecastPreview from "@/components/weather/forecast/ForecastPreview";
import { StyleSheet, View } from "react-native";

export default function Location() {
  return (
    <WeatherProvider>
      <View style={styles.container}>
        <CurrentWeather />
        <ForecastPreview />
      </View>
    </WeatherProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 60,
  },
});
