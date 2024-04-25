import { Stack } from "@mui/material";

import { useTranslations } from "next-intl";
import { PlaceholderTranslationKey } from "weather-forecast-common";
import SearchField from "./SearchField";
import SearchLocationList from "./SearchLocationList";
import SearchLocationProvider from "./SearchLocationProvider";

const SearchLocation = () => {
  const t = useTranslations();
  return (
    <SearchLocationProvider>
      <Stack position="relative">
        <SearchField placeholder={t(PlaceholderTranslationKey.SEARCH)} />{" "}
        <SearchLocationList />
      </Stack>
    </SearchLocationProvider>
  );
};

export default SearchLocation;
