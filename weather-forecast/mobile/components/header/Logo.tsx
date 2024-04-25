import { SearchContext } from "@/components/header/SearchProvider";
import Text from "@/components/ui/text/Text";
import ThemeView from "@/components/ui/view/ThemeView";
import FontSize from "@/constants/fontSizes";
import IconSize from "@/constants/iconSizes";
import useCustomTheme from "@/hooks/useCustomTheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FC, useContext } from "react";
import { StyleSheet } from "react-native";

interface LogoProps {
  backgroundColor?: string;
}

const Logo: FC<LogoProps> = ({ backgroundColor }) => {
  const { palette } = useCustomTheme();
  const color = palette.primary.main;
  const { isInput } = useContext(SearchContext);
  return (
    <>
      {isInput ? (
        <ThemeView></ThemeView>
      ) : (
        <ThemeView style={{ ...styles.appname, backgroundColor }}>
          <MaterialCommunityIcons
            name="weather-partly-cloudy"
            size={IconSize.ENORMOUS}
            color="black"
            style={{ color }}
          />
          <Text style={{ ...styles.text, color }}>Weather</Text>
        </ThemeView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  appname: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  text: {
    fontSize: FontSize.BIG,
    fontFamily: "Montserrat-Bold",
  },
});

export default Logo;
