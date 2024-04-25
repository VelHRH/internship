import { ArrowCircleUp } from "@mui/icons-material";
import { Box, Tooltip, Typography } from "@mui/material";
import { FC } from "react";

import { generateWindDirection } from "@/lib/utils/wind";

interface WindProps {
  speed: number;
  deg: number;
  units?: boolean;
}

const Wind: FC<WindProps> = ({ speed, deg, units }) => (
  <Tooltip title={generateWindDirection(deg)} placement="bottom">
    <Box display="flex" gap={1} alignItems="center">
      <Typography display="flex" gap={1} variant={units ? "h5" : "body1"}>
        {speed}
        {units && <Typography variant="body2">m/s</Typography>}
      </Typography>
      <ArrowCircleUp sx={{ transform: `rotate(${deg}deg)` }} />
    </Box>
  </Tooltip>
);

export default Wind;
