import { Grid } from "@mui/material";
import { FC } from "react";

import LocationItem from "./LocationItem";

import EmptyList from "@/components/ui/EmptyList";
import { GetUserQuery } from "weather-forecast-common";

interface LocationListProps {
  locations: NonNullable<GetUserQuery["getUser"]>["locations"];
}

const LocationList: FC<LocationListProps> = ({ locations }) => {
  if (!locations?.length) {
    return <EmptyList entity="Locations" />;
  }
  return (
    <Grid container spacing={3} style={{ alignItems: "stretch" }}>
      {locations.map((location) => (
        <Grid key={location.name} item xs={6} md={3}>
          <LocationItem location={location}></LocationItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default LocationList;
