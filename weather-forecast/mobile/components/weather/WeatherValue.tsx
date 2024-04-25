import Text from "@/components/ui/text/Text";
import { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";

const WeatherValueSizes = {
  small: { value: 20, units: 10 },
  medium: { value: 40, units: 17 },
  big: {
    value: 80,
    units: 30,
  },
} as const;

interface WeatherValueProps {
  value: number;
  units?: string;
  size?: keyof typeof WeatherValueSizes;
  additionalIcon?: ReactNode;
}

const WeatherValue: FC<WeatherValueProps> = ({
  value,
  units,
  size = "small",
  additionalIcon,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <Text
          style={{
            fontSize: WeatherValueSizes[size].value,
          }}
        >
          {value}
        </Text>
        {units && (
          <Text
            style={{
              fontSize: WeatherValueSizes[size].units,
            }}
          >
            {units}
          </Text>
        )}
      </View>
      {additionalIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 1,
    alignItems: "center",
  },
  valueContainer: {
    flexDirection: "row",
    gap: 1,
  },
});

export default WeatherValue;
