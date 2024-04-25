import { useColorScheme } from "react-native";
import { ThemeMode, getDesignTokens } from "weather-forecast-common";

const useCustomTheme = () => {
  const colorScheme = (useColorScheme() as ThemeMode) ?? ThemeMode.DARK;
  const theme = getDesignTokens(colorScheme);
  return theme!;
};

export default useCustomTheme;
