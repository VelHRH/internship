"use client";

import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { ButtonTranslationKey } from "weather-forecast-common";

const Logout = () => {
  const handleLogout = async () => await signOut();
  const t = useTranslations();
  return (
    <Button
      color="primary"
      variant="contained"
      size="small"
      onClick={handleLogout}
    >
      {t(ButtonTranslationKey.LOGOUT)}
    </Button>
  );
};

export default Logout;
