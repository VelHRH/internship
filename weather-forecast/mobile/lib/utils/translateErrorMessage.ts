import { I18n } from "i18n-js";
import { ErrorTranslationKey, translations } from "weather-forecast-common";

type TranslateErrorParams = {
  err: unknown;
  i18n: I18n;
  messageKey: ErrorTranslationKey;
  defaultMessageKey?: ErrorTranslationKey;
};

type TranslateErrorMessage = (
  params: TranslateErrorParams
) => string | undefined;

const translateErrorMessage: TranslateErrorMessage = ({
  err,
  i18n,
  messageKey,
  defaultMessageKey,
}) => {
  if (!err || typeof err !== "object") {
    return;
  }
  return "message" in err && err.message === translations.en[messageKey]
    ? i18n.t(messageKey)
    : i18n.t(defaultMessageKey!);
};

export default translateErrorMessage;
