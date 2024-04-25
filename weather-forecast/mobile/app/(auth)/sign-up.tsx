import { useLanguage } from "@/components/TranslationProvider";
import AuthForm from "@/components/auth/AuthForm";
import OptionLink from "@/components/auth/OptionLink";
import SignScreen from "@/components/auth/SignScreen";
import ScreenLink from "@/constants/screenlinks";
import handleErrorToast from "@/lib/utils/handleErrorToast";
import translateErrorMessage from "@/lib/utils/translateErrorMessage";
import { useMutation } from "@apollo/client";
import { router } from "expo-router";

import {
  ButtonTranslationKey,
  ErrorTranslationKey,
  LoginInput,
  SIGN_UP,
  ScreenTranslationKey,
} from "weather-forecast-common";

export default function SignUp() {
  const [signUp] = useMutation(SIGN_UP);
  const { i18n } = useLanguage();
  const onSubmit = async (formData: LoginInput) => {
    try {
      await signUp({ variables: formData });
      router.replace(ScreenLink.LOGIN);
    } catch (err) {
      const message = translateErrorMessage({
        err,
        i18n,
        messageKey: ErrorTranslationKey.DUPLICATE_EMAIL,
        defaultMessageKey: ErrorTranslationKey.FAILED_SIGN_UP,
      });
      handleErrorToast(message!);
    }
  };
  return (
    <SignScreen lable={i18n.t(ScreenTranslationKey.SIGN_UP)}>
      <>
        <AuthForm onSubmit={onSubmit} />
        <OptionLink href={ScreenLink.LOGIN}>
          {i18n.t(ButtonTranslationKey.ALREADY_REGISTERED)}
        </OptionLink>
      </>
    </SignScreen>
  );
}
