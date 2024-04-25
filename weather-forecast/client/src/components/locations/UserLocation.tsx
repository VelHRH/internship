"use client";

import LocationList from "./LocationList";

import useGetUser from "@/hooks/useGetUser";

const UserLocation = () => {
  const profile = useGetUser();
  if (!profile) {
    return;
  }

  return <LocationList locations={profile.locations} />;
};

export default UserLocation;
