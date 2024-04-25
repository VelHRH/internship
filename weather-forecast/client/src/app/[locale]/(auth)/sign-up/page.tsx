import SignPage from "@/components/auth/SignPage";
import SignupForm from "@/components/auth/SignupForm";
import NavigationLink from "@/constants/navigation/links";
import { useTranslations } from "next-intl";
import {
  ButtonTranslationKey,
  ScreenTranslationKey,
} from "weather-forecast-common";

const SignupPage = () => {
  const t = useTranslations();
  return (
    <SignPage
      form={<SignupForm />}
      lable={t(ScreenTranslationKey.SIGN_UP)}
      option={t(ButtonTranslationKey.ALREADY_REGISTERED)}
      optionHref={NavigationLink.LOGIN}
    />
  );
};

export default SignupPage;
