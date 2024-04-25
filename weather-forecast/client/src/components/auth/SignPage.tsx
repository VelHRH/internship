import { LockOutlined } from "@mui/icons-material";
import { Avatar, Container, Grid, Stack, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { FC, ReactNode } from "react";

import Link from "@/components/ui/Link";
import NavigationLink from "@/constants/navigation/links";
import { authOptions } from "@/lib/next-auth/authOptions";
import { getServerSession } from "next-auth";

interface SignProps {
  form: ReactNode;
  lable: string;
  option: string;
  optionHref: NavigationLink;
}

const SignPage: FC<SignProps> = async ({ form, lable, option, optionHref }) => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect(NavigationLink.MAIN);
  }
  return (
    <Container maxWidth="xs">
      <Stack
        sx={{
          marginTop: 8,
          gap: 4,
        }}
      >
        <Stack alignSelf="center">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main", alignSelf: "center" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            {lable}
          </Typography>
        </Stack>
        {form}
        <Grid container>
          <Grid item>
            <Link href={optionHref} variant="body1" animate>
              {option}
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default SignPage;
