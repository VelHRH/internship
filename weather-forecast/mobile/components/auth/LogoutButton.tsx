import { useLanguage } from "@/components/TranslationProvider";
import { AuthContext } from "@/components/auth/SessionProvider";
import Button from "@/components/ui/Button";
import useCustomTheme from "@/hooks/useCustomTheme";
import { useContext } from "react";
import { ButtonTranslationKey } from "weather-forecast-common";

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const { i18n } = useLanguage();
  const { palette } = useCustomTheme();
  const color = palette.error.dark;
  return (
    <Button
      onPress={logout}
      text={i18n.t(ButtonTranslationKey.LOGOUT)}
      color={color}
    />
  );
};

export default LogoutButton;
