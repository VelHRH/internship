import { CircularProgress } from "@mui/material";
import { FC, useContext } from "react";

import ClearInput from "@/components/locations/searchLoctions/ClearInput";
import { SearchLocationContext } from "@/components/locations/searchLoctions/SearchLocationProvider";

const SearchAdornment: FC = () => {
  const { inputText, loading } = useContext(SearchLocationContext);
  if (loading) {
    return <CircularProgress size="1.5rem" color="inherit" />;
  }

  if (inputText) {
    return <ClearInput />;
  }
};

export default SearchAdornment;
