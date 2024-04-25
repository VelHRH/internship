import SearchLocationList from "@/components/locations/serchLocations/SearchLocationsList";
import ThemeView from "@/components/ui/view/ThemeView";
import { FC } from "react";

const FoundLocations: FC = () => {
  return (
    <ThemeView style={{ flex: 1 }}>
      <SearchLocationList />
    </ThemeView>
  );
};

export default FoundLocations;
