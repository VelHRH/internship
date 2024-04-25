import { Box, Divider, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

interface ProfileSectionProps extends PropsWithChildren {
  trailing?: boolean;
  title: string;
}

const ProfileSection: FC<ProfileSectionProps> = ({
  trailing,
  title,
  children,
}) => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: 3, pl: 8 }}
      >
        <Typography variant="h6">{title}:</Typography>
        {children}
      </Box>
      {!trailing && <Divider />}
    </>
  );
};

export default ProfileSection;
