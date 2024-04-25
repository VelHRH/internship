import { useLanguage } from "@/components/TranslationProvider";
import { SearchContext } from "@/components/header/SearchProvider";
import TopLocationItem from "@/components/locations/TopLocationItem";
import Spinner from "@/components/ui/Spinner";
import Text from "@/components/ui/text/Text";
import FontSize from "@/constants/fontSizes";
import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  GET_TOP_LOCATIONS,
  PlaceholderTranslationKey,
  ScreenTranslationKey,
} from "weather-forecast-common";

const TopLocations = () => {
  const { data } = useQuery(GET_TOP_LOCATIONS);
  const { i18n } = useLanguage();
  const { inputRef } = useContext(SearchContext);

  if (!data) {
    return <Spinner />;
  }

  const { topLocations } = data;
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>
        {i18n.t(ScreenTranslationKey.TOP_LOCATIONS)}
      </Text>
      {topLocations.map((location) => (
        <TopLocationItem key={location.id} {...location} />
      ))}
      <TouchableOpacity onPress={() => inputRef.current!.focus()}>
        <Text style={styles.linkText}>
          {i18n.t(PlaceholderTranslationKey.SEARCH)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%", gap: 10 },
  headline: {
    fontSize: FontSize.MEDIUM,
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
  },
  linkText: {
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
  },
});

export default TopLocations;
