import { Close, Mode } from "@mui/icons-material";
import { Button } from "@mui/material";
import { FC, useContext } from "react";

import PasswordForm from "@/components/profile/edit/PasswordForm";
import ProfileSection from "@/components/profile/ProfileSection";
import { UpdateProfileContext } from "@/components/profile/UpdateProfileProvider";
import { useTranslations } from "next-intl";
import { ScreenTranslationKey } from "weather-forecast-common";

const EditPassword: FC = () => {
  const { isChangePassword, toggleIsPassword } =
    useContext(UpdateProfileContext);
  const t = useTranslations();
  return (
    <>
      <ProfileSection
        title={t(ScreenTranslationKey.PASSWORD)}
        trailing={isChangePassword}
      >
        <Button sx={{ color: "text.primary" }} onClick={toggleIsPassword}>
          {isChangePassword ? <Close /> : <Mode />}
        </Button>
      </ProfileSection>
      <PasswordForm />
    </>
  );
};

export default EditPassword;
