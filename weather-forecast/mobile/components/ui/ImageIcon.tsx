import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { generateIcon } from "weather-forecast-common";

export type ImageIconProps = View["props"] & { icon: string };

const ImageIcon = (props: ImageIconProps) => {
  const { style, icon, ...otherProps } = props;

  return (
    <View style={[styles.imageContainer, style]} {...otherProps}>
      <Image
        style={styles.image}
        source={generateIcon(icon)}
        transition={1000}
        contentFit="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
  },
  image: {
    flex: 1,
  },
});

export default ImageIcon;
