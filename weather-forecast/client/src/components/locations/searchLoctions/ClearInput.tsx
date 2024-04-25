import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useContext } from "react";

import { SearchLocationContext } from "./SearchLocationProvider";

const ClearInput = () => {
  const { clearInput } = useContext(SearchLocationContext);
  return (
    <IconButton onClick={clearInput} size="small">
      <Close />
    </IconButton>
  );
};

export default ClearInput;
