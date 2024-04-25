import { Mode } from "@mui/icons-material";
import { Button } from "@mui/material";
import { FC } from "react";

import ProfileSection from "@/components/profile/ProfileSection";
import Link from "@/components/ui/Link";
import NavigationLink from "@/constants/navigation/links";
import { useTranslations } from "next-intl";
import { ScreenTranslationKey } from "weather-forecast-common";

const EditLocations: FC = () => {
  const t = useTranslations();
  return (
    <ProfileSection title={t(ScreenTranslationKey.LOCATIONS)}>
      <Link href={NavigationLink.LOCATIONS}>
        <Button sx={{ color: "text.primary" }}>
          <Mode />
        </Button>
      </Link>
    </ProfileSection>
  );
};

export default EditLocations;
