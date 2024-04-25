import { useContext } from "react";

import { useLanguage } from "@/components/TranslationProvider";
import { ProfileContext } from "@/components/profile/ProfileProvider";
import Input from "@/components/ui/Input";
import translateErrorMessage from "@/lib/utils/translateErrorMessage";
import {
  ErrorTranslationKey,
  PlaceholderTranslationKey,
} from "weather-forecast-common";

const PasswordForm = () => {
  const { updateFormData, profile, isChangePassword } =
    useContext(ProfileContext);
  const {
    control,
    formState: { errors },
  } = updateFormData;

  const { i18n } = useLanguage();

  if (!isChangePassword) {
    return null;
  }

  return (
    <>
      {profile.hasPassword && (
        <Input
          control={control}
          name="oldPassword"
          placeholder={i18n.t(PlaceholderTranslationKey.OLD_PASSWORD)}
          secureTextEntry
          error={translateErrorMessage({
            err: errors.oldPassword,
            i18n,
            messageKey: ErrorTranslationKey.PASSWORD_TOO_SHORT,
          })}
        />
      )}
      <Input
        control={control}
        name="newPassword"
        placeholder={i18n.t(PlaceholderTranslationKey.NEW_PASSWORD)}
        secureTextEntry
        error={translateErrorMessage({
          err: errors.newPassword,
          i18n,
          messageKey: ErrorTranslationKey.PASSWORD_TOO_SHORT,
        })}
      />
    </>
  );
};

export default PasswordForm;
