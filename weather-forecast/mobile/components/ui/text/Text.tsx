import useCustomTheme from "@/hooks/useCustomTheme";
import { Text as DefaultText } from "react-native";

export type TextProps = DefaultText["props"];

const Text = (props: TextProps) => {
  const { style, ...otherProps } = props;

  const { palette } = useCustomTheme();

  const color = palette!.text?.primary;

  return (
    <DefaultText
      style={[{ color, fontFamily: "Montserrat-Medium" }, style]}
      {...otherProps}
    />
  );
};

export default Text;
