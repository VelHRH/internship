import Spinner from "@/components/ui/Spinner";
import Text from "@/components/ui/text/Text";
import FontSize from "@/constants/fontSizes";
import IconSize from "@/constants/iconSizes";
import useCustomTheme from "@/hooks/useCustomTheme";
import useToggleLocation from "@/hooks/useToggleLocation";
import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Location } from "weather-forecast-common";

interface SearchLocationItemProps {
  location: Location;
}

const SearchLocationItem: FC<SearchLocationItemProps> = ({ location }) => {
  const { palette } = useCustomTheme();
  const backgroundColor = palette.primary.light;
  const color = palette.text.primary;

  const { addLocation, loading } = useToggleLocation(location.id);

  return (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor }}
      onPress={addLocation}
    >
      <Text style={styles.text}>
        {location.name}, {location.country}
      </Text>
      {loading ? (
        <Spinner color={color} />
      ) : (
        <AntDesign name="plus" size={IconSize.MEDIUM} color={color} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.MEDIUM,
    width: "80%",
  },
});

export default SearchLocationItem;
