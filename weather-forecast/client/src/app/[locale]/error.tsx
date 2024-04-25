"use client";

import { Button, Container, Typography } from "@mui/material";
import { FC } from "react";

import ErrorTypography from "@/components/ui/ErrorTypography";
import { useTranslations } from "next-intl";
import { ErrorTranslationKey } from "weather-forecast-common";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const error: FC<ErrorProps> = ({ error, reset }) => {
  const t = useTranslations();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
        gap: 3,
      }}
      maxWidth="sm"
    >
      <Typography variant="h4">
        {t(ErrorTranslationKey.ERROR_OCCURED)}
      </Typography>
      <ErrorTypography>
        {error.message || t(ErrorTranslationKey.DEFAULT)}
      </ErrorTypography>
      <Button onClick={reset} variant="contained">
        Retry
      </Button>
    </Container>
  );
};

export default error;
