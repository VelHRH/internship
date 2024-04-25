import Text from "@/components/ui/text/Text";
import { WeatherContext } from "@/components/weather/WeatherProvider";
import DetailsInfo from "@/components/weather/current/DetailsInfo";
import MainInfo from "@/components/weather/current/MainInfo";
import FontSize from "@/constants/fontSizes";
import IconSize from "@/constants/iconSizes";
import useCustomTheme from "@/hooks/useCustomTheme";
import { Entypo } from "@expo/vector-icons";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";

const CurrentWeather = () => {
  const { location } = useContext(WeatherContext);
  const { palette } = useCustomTheme();
  const color = palette.text.primary;
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Entypo name="location-pin" size={IconSize.BIG} color={color} />
        <Text style={styles.locationName}>
          {location?.name}, {location?.country}
        </Text>
      </View>
      <MainInfo />
      <DetailsInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  locationName: {
    fontSize: FontSize.MEDIUM,
    fontFamily: "Montserrat-Bold",
  },
});

export default CurrentWeather;
