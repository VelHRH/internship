import { Stack, Typography } from "@mui/material";

import UserLocation from "@/components/locations/UserLocation";
import { useTranslations } from "next-intl";
import { ScreenTranslationKey } from "weather-forecast-common";

const LocationsPage = () => {
  const t = useTranslations();
  return (
    <Stack gap={5}>
      <Typography variant="h4" fontWeight={500}>
        {t(ScreenTranslationKey.MY_LOCATIONS)}:
      </Typography>
      <UserLocation />
    </Stack>
  );
};

export default LocationsPage;
