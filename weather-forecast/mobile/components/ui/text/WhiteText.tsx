import React, { FC } from "react";
import { Text } from "react-native";

export type WhiteTextProps = Text["props"];

const WhiteText: FC<WhiteTextProps> = (props) => {
  const { style, ...otherProps } = props;
  return (
    <Text
      style={[{ color: "white", fontFamily: "Montserrat-Medium" }, style]}
      {...otherProps}
    />
  );
};

export default WhiteText;
