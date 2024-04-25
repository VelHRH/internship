"use client";

import { TextField } from "@mui/material";
import { useContext } from "react";

import { SearchLocationContext } from "./SearchLocationProvider";

import SearchAdornment from "@/components/locations/searchLoctions/SearchAdornment";

const SearchField = ({ placeholder }: { placeholder: string }) => {
  const { inputText, handleSearchInput } = useContext(SearchLocationContext);

  return (
    <TextField
      placeholder={placeholder}
      InputProps={{
        endAdornment: <SearchAdornment />,
      }}
      variant="standard"
      value={inputText}
      onChange={handleSearchInput}
    />
  );
};

export default SearchField;
