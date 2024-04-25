import Spinner from "@/components/ui/Spinner";
import Text from "@/components/ui/text/Text";
import IconSize from "@/constants/iconSizes";
import useCustomTheme from "@/hooks/useCustomTheme";
import useToggleLocation from "@/hooks/useToggleLocation";
import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Location } from "weather-forecast-common";

const TopLocationItem: FC<Location> = (location) => {
  const { name, country, stars } = location;

  const { palette } = useCustomTheme();
  const backgroundColor = palette.action.selected;
  const borderColor = palette.primary.main;

  const { addLocation, loading } = useToggleLocation(location.id);
  return (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor, borderColor }}
      onPress={addLocation}
    >
      <Text>
        {name}, {country}
      </Text>
      {loading && <Spinner />}
      <View style={styles.stars}>
        <Text style={styles.starsText}>{stars}</Text>
        <AntDesign name="star" size={IconSize.MEDIUM} color="#deb204" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 30,
    padding: 10,
    borderWidth: 2,
    alignItems: "center",
  },
  stars: {
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
  },
  starsText: {
    color: "#deb204",
  },
});

export default TopLocationItem;
