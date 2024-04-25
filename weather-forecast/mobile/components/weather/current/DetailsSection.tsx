import Text from "@/components/ui/text/Text";
import FontSize from "@/constants/fontSizes";
import { FC, PropsWithChildren, ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type DetailsSectionProps = View["props"] &
  PropsWithChildren & { title: string; icon: ReactNode };

const DetailsSection: FC<DetailsSectionProps> = (props) => {
  const { style, title, children, icon, ...otherProps } = props;
  return (
    <View style={[styles.container, style]} {...otherProps}>
      <View style={styles.headline}>
        {icon}
        <Text style={styles.text}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 5,
  },
  headline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  text: {
    textTransform: "uppercase",
    fontFamily: "Montserrat-SemiBold",
    fontSize: FontSize.SUPER_SMALL,
  },
});

export default DetailsSection;
