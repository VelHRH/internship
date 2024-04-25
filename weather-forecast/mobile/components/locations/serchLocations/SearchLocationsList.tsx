import { SearchContext } from "@/components/header/SearchProvider";
import SearchLocationItem from "@/components/locations/serchLocations/SearchLocationItem";
import Spinner from "@/components/ui/Spinner";
import useGetLocations from "@/hooks/useGetLocations";
import useGetUser from "@/hooks/useGetUser";
import { useContext, useMemo } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useDebounce } from "use-debounce";

const SearchLocationList = () => {
  const { inputValue } = useContext(SearchContext);
  const [debouncedInput] = useDebounce(inputValue, 500);
  const { locations, fetchMore, loading } = useGetLocations(debouncedInput);

  const { user } = useGetUser();

  const newLocations = useMemo(
    () =>
      locations?.filter(
        (location) =>
          !user!.locations.some(
            (userLocation) => userLocation.id === location.id
          )
      ),
    [locations, user]
  );

  const loadMore = () => {
    if (!locations?.length) {
      return;
    }
    fetchMore({
      variables: {
        offset: locations.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        const previousLocations = prev.locations;
        const fetchMoreLocations = fetchMoreResult.locations;

        fetchMoreResult.locations = [
          ...previousLocations,
          ...fetchMoreLocations,
        ];

        return { ...fetchMoreResult };
      },
    });
  };

  const isSpinner = loading || inputValue !== debouncedInput;
  return (
    <FlatList
      style={styles.container}
      data={newLocations}
      renderItem={({ item }) => <SearchLocationItem location={item} />}
      ListFooterComponent={() => isSpinner && <Spinner />}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={loadMore}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});

export default SearchLocationList;
