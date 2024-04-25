import { Tooltip } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { generateIcon } from "weather-forecast-common";

interface WeatherIconProps {
  name: string;
  icon: string;
  size?: number;
}

const WeatherIcon: FC<WeatherIconProps> = ({ name, icon, size = 100 }) => {
  return (
    <Tooltip title={name} placement="bottom">
      <Image
        src={generateIcon(icon)}
        alt="Weather icon"
        width={size}
        height={size}
      />
    </Tooltip>
  );
};

export default WeatherIcon;
