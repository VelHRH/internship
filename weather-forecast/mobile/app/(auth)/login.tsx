import { useLanguage } from "@/components/TranslationProvider";
import AuthForm from "@/components/auth/AuthForm";
import OptionLink from "@/components/auth/OptionLink";
import { AuthContext } from "@/components/auth/SessionProvider";
import SignScreen from "@/components/auth/SignScreen";
import ScreenLink from "@/constants/screenlinks";
import handleErrorToast from "@/lib/utils/handleErrorToast";
import translateErrorMessage from "@/lib/utils/translateErrorMessage";
import { router } from "expo-router";
import { useContext } from "react";
import {
  ButtonTranslationKey,
  ErrorTranslationKey,
  LoginInput,
  ScreenTranslationKey,
} from "weather-forecast-common";

export default function Login() {
  const { login } = useContext(AuthContext);

  const { i18n } = useLanguage();

  const onSubmit = async (formData: LoginInput) => {
    try {
      await login(formData);
      router.replace(ScreenLink.MAIN);
    } catch (err) {
      const message = translateErrorMessage({
        err,
        i18n,
        messageKey: ErrorTranslationKey.WRONG_CREDENTIALS,
        defaultMessageKey: ErrorTranslationKey.FAILED_LOGIN,
      });
      handleErrorToast(message!);
    }
  };
  return (
    <SignScreen lable={i18n.t(ScreenTranslationKey.LOGIN)}>
      <>
        <AuthForm onSubmit={onSubmit} />
        <OptionLink href={ScreenLink.SIGN_UP}>
          {i18n.t(ButtonTranslationKey.NOT_REGISTERED)}
        </OptionLink>
      </>
    </SignScreen>
  );
}
