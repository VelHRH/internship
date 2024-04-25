import useCustomTheme from "@/hooks/useCustomTheme";
import { FC } from "react";
import { View } from "react-native";

type DividerProps = View["props"] & {
  rotate: "horisontal" | "vertical";
};

const Divider: FC<DividerProps> = (props) => {
  const { rotate, style, ...otherProps } = props;
  const { palette } = useCustomTheme();
  const backgroundColor = palette.primary.main;
  if (rotate === "horisontal") {
    return (
      <View
        style={[{ height: 2, width: "100%", backgroundColor }, style]}
        {...otherProps}
      />
    );
  }
  return (
    <View
      style={[{ width: 2, height: "100%", backgroundColor }, style]}
      {...otherProps}
    />
  );
};

export default Divider;
