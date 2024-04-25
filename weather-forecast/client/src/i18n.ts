import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { Language, translations } from "weather-forecast-common";

const locales = Object.values(Language);

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: translations[locale as Language],
  };
});
