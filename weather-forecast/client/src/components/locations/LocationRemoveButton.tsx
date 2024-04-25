import { Remove } from "@mui/icons-material";
import { Button } from "@mui/material";
import { FC, useContext } from "react";

import { LocationItemContext } from "@/components/locations/LocationItem";
import useToggleLocation from "@/hooks/useToggleLocation";
import { useTranslations } from "next-intl";
import { ButtonTranslationKey } from "weather-forecast-common";

const LocationRemoveButton: FC = () => {
  const { locationId } = useContext(LocationItemContext);
  const { removeLocation, loading } = useToggleLocation(locationId) || {};
  const t = useTranslations();
  if (!removeLocation) {
    return null;
  }

  return (
    <Button
      color="error"
      variant="contained"
      size="small"
      sx={{ width: "100%", gap: 2, mt: 3 }}
      onClick={removeLocation}
      disabled={loading}
    >
      {t(ButtonTranslationKey.REMOVE)}
      <Remove fontSize="small" />
    </Button>
  );
};

export default LocationRemoveButton;
