import { useLanguage } from "@/components/TranslationProvider";
import profileStyles from "@/components/profile/profileStyles";
import Text from "@/components/ui/text/Text";
import useGetUser from "@/hooks/useGetUser";
import React from "react";
import { View } from "react-native";
import { ScreenTranslationKey } from "weather-forecast-common";

const EmailSection = () => {
  const { user } = useGetUser();
  const { i18n } = useLanguage();
  return (
    <View style={profileStyles.section}>
      <Text style={profileStyles.text}>
        {i18n.t(ScreenTranslationKey.EMAIL)}
      </Text>
      <Text style={profileStyles.text}>{user?.email}</Text>
    </View>
  );
};

export default EmailSection;
