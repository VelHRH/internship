"use client";

import Brightness2Icon from "@mui/icons-material/Brightness2";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { Toaster } from "sonner";

import NextAppDirEmotionCacheProvider from "./EmotionCache";

import useGetUser from "@/hooks/useGetUser";
import {
  DEFAULT_THEME,
  ThemeMode,
  getDesignTokens,
} from "weather-forecast-common";
import typography from "./typography";

type ThemeToggleCtx = {
  toggleTheme: () => void;
  toggleIcon: ReactNode;
  mode: ThemeMode;
};

export const ThemeToggleContext = createContext({} as ThemeToggleCtx);

const LOCALSTORAGE_THEME_NAME = "theme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useGetUser();
  const [mode, setMode] = useState<ThemeMode>(
    (user?.userSettings.theme as ThemeMode) || DEFAULT_THEME,
  );

  useEffect(() => {
    const defaultTheme =
      localStorage.getItem(LOCALSTORAGE_THEME_NAME) === ThemeMode.LIGHT
        ? ThemeMode.LIGHT
        : ThemeMode.DARK;
    setMode(defaultTheme);
  }, []);
  const colorMode = useMemo(
    () => ({
      toggleTheme: () => {
        const newMode =
          mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;
        localStorage.setItem(LOCALSTORAGE_THEME_NAME, newMode);
        setMode(newMode);
      },
      toggleIcon:
        mode === ThemeMode.LIGHT ? <Brightness7Icon /> : <Brightness2Icon />,
      mode,
    }),
    [mode],
  );
  const { palette, ...otherOptions } = getDesignTokens(mode);

  const themeOptions = {
    ...otherOptions,
    typography,
    palette,
  } as ThemeOptions;

  const theme = useMemo(() => createTheme(themeOptions), [mode]);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeToggleContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <Toaster theme={mode} richColors closeButton />
        </ThemeProvider>
      </ThemeToggleContext.Provider>
    </NextAppDirEmotionCacheProvider>
  );
}
