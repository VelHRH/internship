"use client";

import { FC } from "react";

import ProfileSettings from "./ProfileSettings";
import UpdateProfileProvider from "./UpdateProfileProvider";

import Loading from "@/components/ui/Loading";
import useGetUser from "@/hooks/useGetUser";

const Profile: FC = () => {
  const profile = useGetUser();

  if (!profile) {
    return <Loading />;
  }

  return (
    <UpdateProfileProvider profile={profile}>
      <ProfileSettings />
    </UpdateProfileProvider>
  );
};

export default Profile;
