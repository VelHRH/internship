import useCustomTheme from "@/hooks/useCustomTheme";
import { FC } from "react";
import { ActivityIndicator } from "react-native";

interface SpinnerProps {
  color?: string;
}

const Spinner: FC<SpinnerProps> = ({ color }) => {
  const { palette } = useCustomTheme();
  const spinnerColor = color || palette.primary.light;
  return <ActivityIndicator size="small" color={spinnerColor} />;
};

export default Spinner;
