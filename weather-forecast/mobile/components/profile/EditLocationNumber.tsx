import { FC, useContext } from "react";

import { useLanguage } from "@/components/TranslationProvider";
import { ProfileContext } from "@/components/profile/ProfileProvider";
import profileStyles from "@/components/profile/profileStyles";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/text/Text";
import IconSize from "@/constants/iconSizes";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { ScreenTranslationKey } from "weather-forecast-common";

const EditLocationNumber: FC = () => {
  const { decrementLocationNumber, incrementLocationNumber, locationNumber } =
    useContext(ProfileContext);
  const { i18n } = useLanguage();
  return (
    <View style={profileStyles.section}>
      <Text style={profileStyles.text}>
        {i18n.t(ScreenTranslationKey.LOCATION_LIMIT)}
      </Text>
      <View style={styles.changeLocations}>
        <Button
          icon={<AntDesign name="minus" size={IconSize.SMALL} color="white" />}
          onPress={decrementLocationNumber}
          style={{ width: "auto" }}
        />
        <Text style={profileStyles.text}>{locationNumber}</Text>
        <Button
          icon={<AntDesign name="plus" size={IconSize.SMALL} color="white" />}
          onPress={incrementLocationNumber}
          style={{ width: "auto" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  changeLocations: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});

export default EditLocationNumber;
