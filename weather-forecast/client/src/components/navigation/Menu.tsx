import Link from "@/components/ui/Link";
import NavigationLink from "@/constants/navigation/links";
import { Box, MenuItem, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { ScreenTranslationKey } from "weather-forecast-common";
import Logo from "./Logo";

const Menu: FC = () => {
  const t = useTranslations();
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Logo />

      <Link href={NavigationLink.LOCATIONS}>
        <MenuItem sx={{ py: "6px", px: "12px" }}>
          <Typography color="text.primary">
            {t(ScreenTranslationKey.LOCATIONS)}
          </Typography>
        </MenuItem>
      </Link>
    </Box>
  );
};

export default Menu;
