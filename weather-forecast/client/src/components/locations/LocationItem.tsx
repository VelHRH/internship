"use client";
import { Stack } from "@mui/material";
import { FC, Suspense, createContext } from "react";

import LocationOverview from "@/components/locations/LocationOverview";
import LocationRemoveButton from "@/components/locations/LocationRemoveButton";
import Link from "@/components/ui/Link";
import Loading from "@/components/ui/Loading";
import NavigationLink from "@/constants/navigation/links";
import type { GetUserQuery } from "weather-forecast-common";
import { ArrayElement } from "weather-forecast-common";

export const LocationItemContext = createContext(
  {} as {
    locationId: number;
  },
);

interface LocationItemProps {
  location: ArrayElement<
    NonNullable<NonNullable<GetUserQuery["getUser"]>["locations"]>
  >;
}

const LocationItem: FC<LocationItemProps> = ({ location }) => {
  const { id: locationId, name, country } = location;
  const locationHref = `${NavigationLink.LOCATIONS}/${locationId.toString()}`;
  return (
    <LocationItemContext.Provider value={{ locationId }}>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: "100%",
          height: "100%",
          p: 3,
          border: "1px solid",
          borderColor: "primary.main",
          borderRadius: "8px",
          backgroundColor: "action.selected",
        }}
      >
        <Link href={locationHref} animate>
          {name}, {country}
        </Link>
        <Stack
          alignItems="center"
          gap={1}
          sx={{
            width: "100%",
          }}
        >
          <Suspense fallback={<Loading />}>
            <LocationOverview />
          </Suspense>
          <LocationRemoveButton />
        </Stack>
      </Stack>
    </LocationItemContext.Provider>
  );
};

export default LocationItem;
