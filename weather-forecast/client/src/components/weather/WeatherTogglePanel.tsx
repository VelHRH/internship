import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";

import { WeatherContext } from "./WeatherProvider";

import LinkParams from "@/constants/navigation/params";
import { useTranslations } from "next-intl";
import {
  ButtonTranslationKey,
  reformatToggleButtonDate,
} from "weather-forecast-common";

const buttonColor = (formattedButtonDate: string, currPageParam: string) => {
  if (formattedButtonDate === currPageParam) {
    return "primary.main";
  }
  return "transparent";
};

const WeatherTogglePanel = () => {
  const { currPageParam, togglePanelDates } = useContext(WeatherContext);
  const t = useTranslations();

  return (
    <Box
      display="flex"
      gap={1}
      sx={{ backgroundColor: "background.default", p: 1, borderRadius: 2 }}
    >
      {togglePanelDates.map((date) => {
        const formattedButtonDate = reformatToggleButtonDate(
          date,
          t(ButtonTranslationKey.NOW),
          t(ButtonTranslationKey.TODAY),
        );
        return (
          <Button
            key={date}
            component={Link}
            href={`?${LinkParams.DATE_PARAM}${formattedButtonDate}`}
            sx={{
              color: "text.primary",
              px: 5,
              backgroundColor: buttonColor(formattedButtonDate, currPageParam),
            }}
            variant="text"
          >
            {date}
          </Button>
        );
      })}
    </Box>
  );
};

export default WeatherTogglePanel;
