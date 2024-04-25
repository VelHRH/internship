import { Button } from "@mui/material";

import Logout from "@/components/auth/Logout";
import Link from "@/components/ui/Link";
import NavigationLink from "@/constants/navigation/links";
import getUser from "@/lib/next-auth/getUser";
import { getTranslations } from "next-intl/server";
import { ScreenTranslationKey } from "weather-forecast-common";

const AuthButtons = async () => {
  const user = await getUser();
  const t = await getTranslations();
  if (user) {
    return (
      <>
        <Link href={NavigationLink.PROFILE}>
          <Button color="primary" variant="text" size="small">
            {user.email}
          </Button>
        </Link>
        <Logout />
      </>
    );
  }
  return (
    <>
      <Link href={NavigationLink.SIGN_IN}>
        <Button color="primary" variant="text" size="small">
          {t(ScreenTranslationKey.LOGIN)}
        </Button>
      </Link>
      <Link href={NavigationLink.SIGN_UP}>
        <Button color="primary" variant="contained" size="small">
          {t(ScreenTranslationKey.SIGN_UP)}
        </Button>
      </Link>
    </>
  );
};

export default AuthButtons;
