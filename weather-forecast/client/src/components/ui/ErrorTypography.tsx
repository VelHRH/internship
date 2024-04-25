import { Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const ErrorTypography: FC<PropsWithChildren> = ({ children }) => {
  return (
    children && (
      <Typography variant="body1" color="error">
        {children}
      </Typography>
    )
  );
};

export default ErrorTypography;
