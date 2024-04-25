import { useLanguage } from "@/components/TranslationProvider";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import translateErrorMessage from "@/lib/utils/translateErrorMessage";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import {
  ButtonTranslationKey,
  ErrorTranslationKey,
  LoginInput,
  PlaceholderTranslationKey,
  loginFieldsSchema,
} from "weather-forecast-common";

interface AuthFormProps {
  onSubmit: (data: LoginInput) => Promise<void>;
}

const AuthForm: FC<AuthFormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginInput>({ resolver: zodResolver(loginFieldsSchema) });

  const { i18n } = useLanguage();
  return (
    <>
      <Input
        control={control}
        name="email"
        placeholder={i18n.t(PlaceholderTranslationKey.EMAIL)}
        error={translateErrorMessage({
          err: errors.email,
          i18n,
          messageKey: ErrorTranslationKey.INVALID_EMAIL,
        })}
      />
      <Input
        control={control}
        name="password"
        placeholder={i18n.t(PlaceholderTranslationKey.PASSWORD)}
        secureTextEntry
        error={translateErrorMessage({
          err: errors.password,
          i18n,
          messageKey: ErrorTranslationKey.PASSWORD_TOO_SHORT,
        })}
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        text={i18n.t(ButtonTranslationKey.OK)}
        loading={isSubmitting}
      />
    </>
  );
};

export default AuthForm;
