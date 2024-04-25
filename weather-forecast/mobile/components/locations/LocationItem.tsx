import LocationItemProvider from "@/components/locations/LocationItemProvider";
import LocationOverview from "@/components/locations/LocationOverview";
import LocationRemoveButton from "@/components/locations/LocationRemoveButton";
import Spinner from "@/components/ui/Spinner";
import Text from "@/components/ui/text/Text";
import FontSize from "@/constants/fontSizes";
import ScreenLink from "@/constants/screenlinks";
import useCustomTheme from "@/hooks/useCustomTheme";
import { router } from "expo-router";
import { FC, Suspense } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Location } from "weather-forecast-common/graphql/__generated__/graphql";

interface LocationItemProps {
  location: Location;
}

const LocationItem: FC<LocationItemProps> = ({ location }) => {
  const { palette } = useCustomTheme();
  const backgroundColor = palette.primary.light;

  const { id, name, country } = location;

  return (
    <LocationItemProvider value={{ locationId: id }}>
      <TouchableOpacity
        style={{ ...styles.container, backgroundColor }}
        onPress={() => router.push(`${id}${ScreenLink.CURRENT_WEATHER}`)}
      >
        <Text style={styles.headline}>
          {name}, {country}
        </Text>
        <Suspense fallback={<Spinner color="white" />}>
          <LocationOverview />
        </Suspense>
        <LocationRemoveButton />
      </TouchableOpacity>
    </LocationItemProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "49%",
    marginBottom: 12,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    gap: 5,
    justifyContent: "space-between",
  },

  headline: {
    fontFamily: "Montserrat-Bold",
    fontSize: FontSize.MEDIUM,
    textAlign: "center",
  },
});

export default LocationItem;
