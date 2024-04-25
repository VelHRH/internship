import { Add } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { toast } from "sonner";

import useToggleLocation from "@/hooks/useToggleLocation";
import { useTranslations } from "next-intl";
import { InfoTranslationKey } from "weather-forecast-common";

interface SearchLoctionItemProps extends PropsWithChildren {
  locationId: number;
}

const SearchLoctionItem: FC<SearchLoctionItemProps> = ({
  children,
  locationId,
}) => {
  const { addLocation, loading } = useToggleLocation(locationId) || {};
  const t = useTranslations();
  const handleAddLocation = addLocation
    ? addLocation
    : () => toast.info(t(InfoTranslationKey.AUTH_REQUIRED_LOCATIONS));
  return (
    <Button
      disabled={loading}
      onClick={handleAddLocation}
      sx={{
        backgroundColor: "primary.main",
        p: 2,
        borderRadius: 3,
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        color: "text.primary",
      }}
    >
      <Typography>{children}</Typography>
      {addLocation && <Add />}
    </Button>
  );
};

export default SearchLoctionItem;
