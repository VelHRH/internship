import Text from "@/components/ui/text/Text";
import FontSize from "@/constants/fontSizes";
import { FC, PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

interface LocationOverwiewSectionProps extends PropsWithChildren {
  title: string;
}

const LocationOverwiewSection: FC<LocationOverwiewSectionProps> = ({
  children,
  title,
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.text}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: FontSize.SMALL,
  },
});

export default LocationOverwiewSection;
