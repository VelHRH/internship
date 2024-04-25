import { FC, useContext } from "react";

import { useLanguage } from "@/components/TranslationProvider";
import PasswordForm from "@/components/profile/PasswordForm";
import { ProfileContext } from "@/components/profile/ProfileProvider";
import profileStyles from "@/components/profile/profileStyles";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/text/Text";
import IconSize from "@/constants/iconSizes";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { ScreenTranslationKey } from "weather-forecast-common";

const EditPassword: FC = () => {
  const { isChangePassword, toggleIsPassword } = useContext(ProfileContext);
  const { i18n } = useLanguage();
  return (
    <View style={styles.container}>
      <View style={profileStyles.section}>
        <Text style={profileStyles.text}>
          {i18n.t(ScreenTranslationKey.PASSWORD)}
        </Text>
        <Button
          icon={
            <MaterialIcons
              name={isChangePassword ? "close" : "mode-edit"}
              size={IconSize.SMALL}
              color="white"
            />
          }
          onPress={toggleIsPassword}
          style={{ width: "auto" }}
        />
      </View>
      <PasswordForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
    width: "100%",
  },
});

export default EditPassword;
