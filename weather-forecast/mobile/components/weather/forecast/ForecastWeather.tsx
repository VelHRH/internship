import { useLanguage } from "@/components/TranslationProvider";
import Text from "@/components/ui/text/Text";
import ForecastList from "@/components/weather/forecast/ForecastList";
import FontSize from "@/constants/fontSizes";
import { StyleSheet, View } from "react-native";
import { ScreenTranslationKey } from "weather-forecast-common";

const ForecastWeather = () => {
  const { i18n } = useLanguage();
  return (
    <>
      <Text style={styles.text}>
        {i18n.t(ScreenTranslationKey.FULL_FORECAST)}
      </Text>
      <View style={styles.container}>
        <ForecastList />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 30,
    marginTop: 60,
  },
  text: {
    fontFamily: "Montserrat-Bold",
    fontSize: FontSize.BIG,
    marginTop: 10,
    alignSelf: "center",
    position: "absolute",
  },
});

export default ForecastWeather;
