import useGetUser from "@/hooks/useGetUser";
import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { DEFAULT_LANGUAGE, translations } from "weather-forecast-common";

type TranslationCtx = {
  i18n: I18n;
  setLocale: Dispatch<SetStateAction<string>>;
  locale: string;
};

const TranslationContext = createContext({} as TranslationCtx);

interface TranslationProviderProps extends PropsWithChildren {}

export const TranslationProvider: FC<TranslationProviderProps> = ({
  children,
}) => {
  const { user } = useGetUser();
  const defaultLang =
    user?.userSettings.language ||
    Localization.getLocales()[0].languageCode ||
    DEFAULT_LANGUAGE;
  const [locale, setLocale] = useState(defaultLang);
  const i18n = new I18n(translations);
  i18n.locale = locale;

  const value = {
    i18n,
    setLocale,
    locale,
  };
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useLanguage = () => useContext(TranslationContext);
