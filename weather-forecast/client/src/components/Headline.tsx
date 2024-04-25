import { Box, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

interface HeadlineProps extends PropsWithChildren {
  highlight?: string;
}

const Headline: FC<HeadlineProps> = ({ children, highlight }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignSelf: "center",
        gap: 4,
      }}
    >
      <Typography variant="h3">{children}</Typography>
      {highlight && (
        <Typography
          variant="h3"
          sx={{
            color: "primary.main",
          }}
        >
          {highlight}
        </Typography>
      )}
    </Box>
  );
};

export default Headline;
