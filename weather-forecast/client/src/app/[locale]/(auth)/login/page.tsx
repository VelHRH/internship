import LoginForm from "@/components/auth/LoginForm";
import SignPage from "@/components/auth/SignPage";
import NavigationLink from "@/constants/navigation/links";
import { useTranslations } from "next-intl";
import {
  ButtonTranslationKey,
  ScreenTranslationKey,
} from "weather-forecast-common";

const LoginPage = () => {
  const t = useTranslations();
  return (
    <SignPage
      form={<LoginForm />}
      lable={t(ScreenTranslationKey.LOGIN)}
      option={t(ButtonTranslationKey.NOT_REGISTERED)}
      optionHref={NavigationLink.SIGN_UP}
    />
  );
};

export default LoginPage;
