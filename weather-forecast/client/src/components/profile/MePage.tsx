import { Stack, Typography } from "@mui/material";

import Profile from "@/components/profile/Profile";
import { useTranslations } from "next-intl";
import { ScreenTranslationKey } from "weather-forecast-common";

const MePage = () => {
  const t = useTranslations();
  return (
    <Stack gap={5}>
      <Typography variant="h4">
        {t(ScreenTranslationKey.PROFILE_SETTINGS)}
      </Typography>
      <Profile />
    </Stack>
  );
};

export default MePage;
