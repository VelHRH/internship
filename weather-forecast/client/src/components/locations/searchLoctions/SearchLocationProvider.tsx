"use client";

import { ApolloQueryResult } from "@apollo/client";
import { FC, PropsWithChildren, createContext, useMemo, useState } from "react";
import { useDebounce } from "use-debounce";

import useGetLocations from "@/hooks/useGetLocations";
import useGetUser from "@/hooks/useGetUser";
import { LocationsQuery } from "weather-forecast-common";

interface SearchLocationCtx {
  inputText: string;
  newLocations?: LocationsQuery["locations"];
  handleSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearInput: () => void;
  loading: boolean;
  onLoadMore: () => Promise<ApolloQueryResult<LocationsQuery>>;
}

export const SearchLocationContext = createContext({} as SearchLocationCtx);

const SearchLocationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [debouncedInput] = useDebounce(inputText, 1000);
  const currentInput = inputText === "" ? inputText : debouncedInput;
  const { locations, loading, fetchMore } = useGetLocations(currentInput);
  const user = useGetUser();
  const newLocations = useMemo(
    () =>
      locations?.filter(
        (location) =>
          !user?.locations?.some(
            (userLocation) => userLocation.id === location.id,
          ),
      ),
    [locations, user],
  );

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value);

  const clearInput = () => {
    setInputText("");
  };

  const onLoadMore = () =>
    fetchMore({
      variables: {
        offset: locations?.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          locations: [...prev.locations, ...fetchMoreResult.locations],
        });
      },
    });
  const value = {
    inputText,
    handleSearchInput,
    newLocations,
    loading: loading || inputText !== currentInput,
    clearInput,
    onLoadMore,
  };
  return (
    <SearchLocationContext.Provider value={value}>
      {children}
    </SearchLocationContext.Provider>
  );
};

export default SearchLocationProvider;
