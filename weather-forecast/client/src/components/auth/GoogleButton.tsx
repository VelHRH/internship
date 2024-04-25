import NavigationLink from "@/constants/navigation/links";
import { Google } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { ButtonTranslationKey } from "weather-forecast-common";

const GoogleButton = () => {
  const t = useTranslations();
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: NavigationLink.MAIN })}
      fullWidth
      variant="outlined"
      sx={{ display: "flex", gap: 2, alignItems: "center" }}
    >
      <Google fontSize="small" />
      <Typography>{t(ButtonTranslationKey.GOOGLE_AUTH)}</Typography>
    </Button>
  );
};

export default GoogleButton;
