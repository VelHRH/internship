import { Button } from "@mui/material";
import { FC } from "react";

import ProfileSection from "@/components/profile/ProfileSection";
import ThemeToggler from "@/components/theme/ThemeToggler";
import { useTranslations } from "next-intl";
import { ScreenTranslationKey } from "weather-forecast-common";

const EditTheme: FC = () => {
  const t = useTranslations();
  return (
    <ProfileSection title={t(ScreenTranslationKey.THEME)} trailing>
      <Button sx={{ p: 0 }}>
        <ThemeToggler />
      </Button>
    </ProfileSection>
  );
};

export default EditTheme;
