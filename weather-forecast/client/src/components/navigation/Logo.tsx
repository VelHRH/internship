import { AcUnit } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { FC } from "react";

import Link from "@/components/ui/Link";
import NavigationLink from "@/constants/navigation/links";

const Logo: FC = () => {
  return (
    <Link href={NavigationLink.MAIN}>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <AcUnit fontSize="large" color="primary" />
        <Typography variant="h5" color="primary">
          Weather
        </Typography>
      </Box>
    </Link>
  );
};

export default Logo;
