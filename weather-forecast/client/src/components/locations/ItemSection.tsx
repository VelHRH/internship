import { Box, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

interface ItemSectionProps extends PropsWithChildren {
  title: string;
}

const ItemSection: FC<ItemSectionProps> = ({ children, title }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Typography color="text.secondary">{title}</Typography>
      {children}
    </Box>
  );
};

export default ItemSection;
