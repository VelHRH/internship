"use client";

import { Box, useTheme } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { ExtendedTheme } from "weather-forecast-common";

const BoxShadow: FC<PropsWithChildren> = ({ children }) => {
  const { backgroundShadow } = useTheme<ExtendedTheme>();
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: backgroundShadow,
        backgroundSize: "100% 70%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </Box>
  );
};

export default BoxShadow;
