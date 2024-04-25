import useCustomTheme from "@/hooks/useCustomTheme";
import { View } from "react-native";

export type ViewProps = View["props"];

const ThemeView = (props: ViewProps) => {
  const { style, ...otherProps } = props;

  const { palette } = useCustomTheme();

  const backgroundColor = palette!.background?.default;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
};

export default ThemeView;
