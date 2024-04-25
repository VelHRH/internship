import { FC, PropsWithChildren, createContext } from "react";

type LocationItemCtx = {
  locationId: number;
};

export const LocationItemContext = createContext({} as LocationItemCtx);

interface LocationItemProviderProps extends PropsWithChildren {
  value: LocationItemCtx;
}

const LocationItemProvider: FC<LocationItemProviderProps> = ({
  children,
  value,
}) => {
  return (
    <LocationItemContext.Provider value={value}>
      {children}
    </LocationItemContext.Provider>
  );
};

export default LocationItemProvider;
