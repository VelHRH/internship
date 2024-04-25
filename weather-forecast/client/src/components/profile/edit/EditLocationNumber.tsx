import { Add, Remove } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useContext } from "react";

import ProfileSection from "@/components/profile/ProfileSection";
import { UpdateProfileContext } from "@/components/profile/UpdateProfileProvider";
import { useTranslations } from "next-intl";
import { ScreenTranslationKey } from "weather-forecast-common";

const EditLocationNumber = () => {
  const { decrementLocationNumber, incrementLocationNumber, locationNumber } =
    useContext(UpdateProfileContext);
  const t = useTranslations();
  return (
    <ProfileSection title={t(ScreenTranslationKey.LOCATION_LIMIT)}>
      <Box display="flex" alignItems="center">
        <IconButton onClick={decrementLocationNumber}>
          <Remove fontSize="small" />
        </IconButton>
        <Typography variant="h6">{locationNumber}</Typography>
        <IconButton onClick={incrementLocationNumber}>
          <Add fontSize="small" />
        </IconButton>
      </Box>
    </ProfileSection>
  );
};

export default EditLocationNumber;
