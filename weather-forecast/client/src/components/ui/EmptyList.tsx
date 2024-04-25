import { Typography } from "@mui/material";
import { FC } from "react";

interface EmptyListProps {
  entity: string;
}

const EmptyList: FC<EmptyListProps> = ({ entity }) => {
  return (
    <Typography sx={{ textAlign: "center" }} color="text.secondary">
      {entity} list is empty :(
    </Typography>
  );
};

export default EmptyList;
