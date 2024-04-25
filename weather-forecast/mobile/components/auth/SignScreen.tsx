import Text from "@/components/ui/text/Text";
import ThemeView from "@/components/ui/view/ThemeView";
import FontSize from "@/constants/fontSizes";
import { FC, PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

interface SignScreenProps extends PropsWithChildren {
  lable: string;
}

const SignScreen: FC<SignScreenProps> = ({ children, lable }) => {
  return (
    <ThemeView style={styles.container}>
      <ThemeView style={styles.wrapper}>
        <Text style={styles.label}>{lable}</Text>
        {children}
      </ThemeView>
    </ThemeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: FontSize.ENORMOUS,
    alignSelf: "center",
    fontFamily: "Montserrat-Bold",
  },
  wrapper: {
    width: "80%",
    gap: 7,
  },
});

export default SignScreen;
