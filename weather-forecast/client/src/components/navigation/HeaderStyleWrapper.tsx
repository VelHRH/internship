"use client";
import { AppBar, Container, Toolbar, useTheme } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { ExtendedTheme } from "weather-forecast-common";

interface HeaderStyleWrapperProps extends PropsWithChildren {}

const HeaderStyleWrapper: FC<HeaderStyleWrapperProps> = ({ children }) => {
  const { toolbarStyles } = useTheme<ExtendedTheme>();
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
      }}
    >
      <Container>
        <Toolbar
          variant="regular"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            backdropFilter: "blur(24px)",
            maxHeight: 40,
            border: "1px solid",
            borderColor: "divider",
            ...toolbarStyles,
            borderRadius: "999px",
          }}
        >
          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderStyleWrapper;
