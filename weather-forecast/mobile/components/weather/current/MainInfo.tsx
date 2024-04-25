import ImageIcon from "@/components/ui/ImageIcon";
import Spinner from "@/components/ui/Spinner";
import Text from "@/components/ui/text/Text";
import { WeatherContext } from "@/components/weather/WeatherProvider";
import WeatherValue from "@/components/weather/WeatherValue";
import FontSize from "@/constants/fontSizes";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { units } from "weather-forecast-common";

const MainInfo = () => {
  const { current } = useContext(WeatherContext);

  if (!current) {
    return <Spinner />;
  }

  return (
    <View style={styles.main}>
      <View>
        <WeatherValue
          units={units.temperature}
          value={current.temperature}
          size="big"
        />
        <Text style={styles.weatherName}>{current.name}</Text>
      </View>
      <ImageIcon icon={current.icon} style={{ width: "50%" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  weatherName: {
    fontSize: FontSize.SMALL,
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
  },
});

export default MainInfo;
