"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import {
  ButtonTranslationKey,
  ErrorTranslationKey,
  LoginInput,
  PlaceholderTranslationKey,
  loginFieldsSchema,
} from "weather-forecast-common";

import GoogleButton from "./GoogleButton";

import Input from "@/components/ui/Input";
import translateErrorMessage from "@/lib/utils/translateErrorMessage";
import { useTranslations } from "next-intl";

interface AuthFormProps {
  onSubmit: (data: LoginInput) => Promise<void>;
}

const AuthForm: FC<AuthFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginInput>({ resolver: zodResolver(loginFieldsSchema) });

  const t = useTranslations();
  return (
    <Stack
      component="form"
      onSubmit={handleSubmit((data) => onSubmit(data))}
      gap={3}
      width="100%"
    >
      <Input
        register={register("email")}
        label={t(PlaceholderTranslationKey.EMAIL)}
        autofocus
        error={translateErrorMessage({
          err: errors.email,
          t,
          messageKey: ErrorTranslationKey.INVALID_EMAIL,
        })}
      />

      <Input
        register={register("password")}
        label={t(PlaceholderTranslationKey.PASSWORD)}
        inputType="password"
        error={translateErrorMessage({
          err: errors.password,
          t,
          messageKey: ErrorTranslationKey.PASSWORD_TOO_SHORT,
        })}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={isSubmitting}
      >
        {t(ButtonTranslationKey.OK)}
      </Button>
      <GoogleButton />
    </Stack>
  );
};

export default AuthForm;
