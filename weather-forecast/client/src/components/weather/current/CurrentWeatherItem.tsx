import Icons from "@/constants/icons";
import { Box, Grid, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface CurrentWeatherItemProps {
  icon?: (typeof Icons)[keyof typeof Icons];
  value: ReactNode | number;
  description?: string;
  unit?: string;
}

const CurrentWeatherItem: FC<CurrentWeatherItemProps> = ({
  icon,
  value,
  description,
  unit,
}) => {
  return (
    <Grid
      container
      item
      xs={description ? 3 : 4}
      display="flex"
      direction="column"
      alignItems="center"
    >
      <Box display="flex" gap={2} alignItems="center">
        {icon}
        <Typography display="flex" gap={1} variant={description ? "h5" : "h4"}>
          {value} <Typography variant="body2">{unit}</Typography>
        </Typography>
      </Box>
      <Typography color="text.secondary" variant="body1">
        {description}
      </Typography>
    </Grid>
  );
};

export default CurrentWeatherItem;
