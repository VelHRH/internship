"use client";

import { Stack, Typography, useTheme } from "@mui/material";
import { useContext } from "react";

import ProfileSection from "./ProfileSection";
import UpdateProfileButton from "./UpdateProfileButton";
import { UpdateProfileContext } from "./UpdateProfileProvider";

import EditLocationNumber from "@/components/profile/edit/EditLocationNumber";
import EditLocations from "@/components/profile/edit/EditLocations";
import EditPassword from "@/components/profile/edit/EditPassword";
import EditTheme from "@/components/profile/edit/EditTheme";
import { useTranslations } from "next-intl";
import { ExtendedTheme, ScreenTranslationKey } from "weather-forecast-common";

const ProfileSettings = () => {
  const { profile } = useContext(UpdateProfileContext);
  const { toolbarStyles } = useTheme<ExtendedTheme>();
  const t = useTranslations();
  return (
    <>
      <Stack sx={{ ...toolbarStyles, px: 2, py: 5 }}>
        <ProfileSection title={t(ScreenTranslationKey.EMAIL)}>
          <Typography variant="h6" paddingX={5}>
            {profile.email}
          </Typography>
        </ProfileSection>
        <EditPassword />
        <EditLocations />
        <EditLocationNumber />
        <EditTheme />
      </Stack>
      <UpdateProfileButton />
    </>
  );
};

export default ProfileSettings;
