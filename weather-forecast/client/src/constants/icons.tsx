import { Compress, Mood, WaterDrop } from "@mui/icons-material";

const Icons = {
  feelsLike: <Mood />,
  pressure: <Compress />,
  humidity: <WaterDrop />,
} as const;

export default Icons;
