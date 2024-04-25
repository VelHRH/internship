import { Divider, Stack } from "@mui/material";
import { FC, useContext } from "react";

import { UpdateProfileContext } from "../UpdateProfileProvider";

import Input from "@/components/ui/Input";
import translateErrorMessage from "@/lib/utils/translateErrorMessage";
import { useTranslations } from "next-intl";
import {
  ErrorTranslationKey,
  PlaceholderTranslationKey,
} from "weather-forecast-common";

const PasswordForm: FC = () => {
  const { updateFormData, profile, isChangePassword } =
    useContext(UpdateProfileContext);
  const {
    register,
    formState: { errors },
  } = updateFormData;

  const t = useTranslations();

  if (!isChangePassword) {
    return null;
  }

  return (
    <>
      <Stack component="form" gap={3} sx={{ width: "50%", marginX: "auto" }}>
        {profile.hasPassword && (
          <Input
            register={register("password.oldPassword")}
            label={t(PlaceholderTranslationKey.OLD_PASSWORD)}
            inputType="password"
            error={translateErrorMessage({
              err: errors.password?.oldPassword,
              t,
              messageKey: ErrorTranslationKey.PASSWORD_TOO_SHORT,
            })}
            autofocus
          />
        )}
        <Input
          register={register("password.newPassword")}
          label={t(PlaceholderTranslationKey.NEW_PASSWORD)}
          inputType="password"
          error={translateErrorMessage({
            err: errors.password?.newPassword,
            t,
            messageKey: ErrorTranslationKey.PASSWORD_TOO_SHORT,
          })}
        />
      </Stack>
      <Divider sx={{ marginTop: 3 }} />
    </>
  );
};

export default PasswordForm;
