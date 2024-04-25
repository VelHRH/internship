import { useLanguage } from "@/components/TranslationProvider";
import { ProfileContext } from "@/components/profile/ProfileProvider";
import profileStyles from "@/components/profile/profileStyles";
import Text from "@/components/ui/text/Text";
import useCustomTheme from "@/hooks/useCustomTheme";
import { Picker } from "@react-native-picker/picker";
import React, { useContext } from "react";
import { View } from "react-native";
import { Language, ScreenTranslationKey } from "weather-forecast-common";

const EditLanguage = () => {
  const { i18n } = useLanguage();
  const { changeLanguage, language } = useContext(ProfileContext);
  const { palette } = useCustomTheme();
  const backgroundColor = palette.action.selected;
  return (
    <View style={profileStyles.section}>
      <Text style={profileStyles.text}>
        {i18n.t(ScreenTranslationKey.LANGUAGE)}
      </Text>
      <Picker
        style={{ width: "50%", backgroundColor }}
        selectedValue={language}
        onValueChange={changeLanguage}
      >
        {Object.keys(Language).map((lang) => (
          <Picker.Item
            label={lang}
            value={Language[lang as keyof typeof Language]}
          />
        ))}
      </Picker>
    </View>
  );
};

export default EditLanguage;
