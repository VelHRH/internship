import FontSize from "@/constants/fontSizes";
import { StyleSheet } from "react-native";

const profileStyles = StyleSheet.create({
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.SMALL,
    fontFamily: "Montserrat-SemiBold",
  },
});

export default profileStyles;
