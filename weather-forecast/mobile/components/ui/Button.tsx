import WhiteText from "@/components/ui/text/WhiteText";
import useCustomTheme from "@/hooks/useCustomTheme";
import { FC, ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface ButtonProps {
  onPress: TouchableOpacity["props"]["onPress"];
  style?: TouchableOpacity["props"]["style"];
  text?: string;
  icon?: ReactNode;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  onPress,
  icon,
  color,
  loading,
  style,
  disabled,
}) => {
  const { palette } = useCustomTheme();
  const backgroundColor = loading
    ? palette.action.selected
    : color || palette.primary.main;
  return (
    <TouchableOpacity
      style={[{ ...styles.button, backgroundColor }, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <WhiteText style={styles.buttonText}>{text}</WhiteText>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textTransform: "uppercase",
    fontFamily: "Montserrat-SemiBold",
  },
});

export default Button;
