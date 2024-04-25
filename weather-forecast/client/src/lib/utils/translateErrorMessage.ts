import { ErrorTranslationKey, translations } from "weather-forecast-common";

type TranslateErrorParams = {
  err: unknown;
  t: any;
  messageKey: ErrorTranslationKey;
  defaultMessageKey?: ErrorTranslationKey;
};

type TranslateErrorMessage = (
  params: TranslateErrorParams,
) => string | undefined;

const translateErrorMessage: TranslateErrorMessage = ({
  err,
  t,
  messageKey,
  defaultMessageKey,
}) => {
  if (!err || typeof err !== "object") {
    return;
  }
  return "message" in err && err.message === translations.en[messageKey]
    ? t(messageKey)
    : t(defaultMessageKey!);
};

export default translateErrorMessage;
