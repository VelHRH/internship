"use client";

import { ApolloQueryResult } from "@apollo/client";
import { Stack } from "@mui/material";
import { UIEvent, useContext } from "react";
import { LocationsQuery } from "weather-forecast-common";

import { SearchLocationContext } from "./SearchLocationProvider";
import SearchLoctionItem from "./SearchLoctionItem";

const handleScroll = (
  { currentTarget }: UIEvent<HTMLDivElement, globalThis.UIEvent>,
  onLoadMore: () => Promise<ApolloQueryResult<LocationsQuery>>,
) => {
  const { scrollTop, clientHeight, scrollHeight } = currentTarget;
  if (scrollTop + clientHeight >= scrollHeight) {
    onLoadMore();
  }
};

const SearchLocationList = () => {
  const { newLocations, onLoadMore } = useContext(SearchLocationContext);

  if (!newLocations?.length) {
    return null;
  }

  return (
    <Stack
      maxHeight={300}
      width="200%"
      left="-50%"
      overflow="auto"
      gap={2}
      sx={{
        top: 50,
        p: 3,
        borderRadius: 2,
        backgroundColor: "background.paper",
      }}
      position="absolute"
      onScroll={(e) => handleScroll(e, onLoadMore)}
    >
      {newLocations!.map((location) => (
        <SearchLoctionItem key={location.id} locationId={location.id}>
          {location.name}, {location.country}
        </SearchLoctionItem>
      ))}
    </Stack>
  );
};

export default SearchLocationList;
