import {
  PaletteColorOptions,
  Theme,
  ThemeOptions,
  TypeAction,
  TypeBackground,
  TypeText,
  alpha,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { brand, gray, green, secondary } from './colors';
import getScrollbarStyles from './scrollbarStyles';
import { ThemeMode } from './themeModes';

interface AdditionalThemeProperties {
  toolbarStyles: {
    borderRadius: number;
    bgcolor: string;
    boxShadow: string;
  };
  backgroundShadow: string;
}

interface ExtendedThemeOptions extends ThemeOptions, AdditionalThemeProperties {
  palette: {
    mode: ThemeMode;
    primary: PaletteColorOptions;
    secondary: PaletteColorOptions;
    warning: PaletteColorOptions;
    error: PaletteColorOptions;
    success: PaletteColorOptions;
    divider: string;
    background: Partial<TypeBackground>;
    text: Partial<TypeText>;
    action: Partial<TypeAction>;
  };
}
export interface ExtendedTheme extends Theme, AdditionalThemeProperties {}

export const getDesignTokens = (mode: ThemeMode): ExtendedThemeOptions => ({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          ...getScrollbarStyles(mode),
        },
      },
    },
  },
  palette: {
    mode,
    primary: {
      light: brand[200],
      main: brand[500],
      dark: brand[800],
      contrastText: brand[50],
      ...(mode === ThemeMode.DARK && {
        contrastText: brand[100],
        light: brand[300],
        main: brand[400],
        dark: brand[800],
      }),
    },
    secondary: {
      light: secondary[300],
      main: secondary[500],
      dark: secondary[800],
      ...(mode === ThemeMode.DARK && {
        light: secondary[400],
        main: secondary[500],
        dark: secondary[900],
      }),
    },
    warning: {
      main: '#F7B538',
      dark: '#F79F00',
      ...(mode === ThemeMode.DARK && { main: '#F7B538', dark: '#F79F00' }),
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
      ...(mode === ThemeMode.DARK && {
        light: red[400],
        main: red[500],
        dark: red[700],
      }),
    },
    success: {
      light: green[300],
      main: green[400],
      dark: green[800],
      ...(mode === ThemeMode.DARK && {
        light: green[400],
        main: green[500],
        dark: green[700],
      }),
    },
    divider:
      mode === ThemeMode.DARK ? alpha(gray[600], 0.3) : alpha(gray[300], 0.5),
    background: {
      default: '#fff',
      paper: gray[50],
      ...(mode === ThemeMode.DARK && { default: gray[900], paper: gray[800] }),
    },
    text: {
      primary: gray[900],
      secondary: gray[600],
      ...(mode === ThemeMode.DARK && { primary: '#fff', secondary: gray[400] }),
    },
    action: {
      selected: `${alpha(brand[200], 0.2)}`,
      ...(mode === ThemeMode.DARK && {
        selected: alpha(brand[800], 0.2),
      }),
    },
  },
  spacing: 4,
  toolbarStyles: {
    borderRadius: 3,
    ...(mode === ThemeMode.LIGHT
      ? {
          bgcolor: 'rgba(255, 255, 255, 0.4)',
          boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
        }
      : {
          bgcolor: 'rgba(0, 0, 0, 0.4)',
          boxShadow:
            '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
        }),
  },
  backgroundShadow:
    mode === ThemeMode.LIGHT
      ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
      : 'linear-gradient(#02294F, #090E10)',
});
