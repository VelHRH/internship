import createMiddleware from "next-intl/middleware";
import { DEFAULT_LANGUAGE, Language } from "weather-forecast-common";

export default createMiddleware({
  locales: Object.values(Language),
  defaultLocale: DEFAULT_LANGUAGE,
});

export const config = { matcher: ["/((?!api|_next|.*\\..*).*)"] };
