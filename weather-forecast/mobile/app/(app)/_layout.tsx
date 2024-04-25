import { AuthContext } from "@/components/auth/SessionProvider";
import ScreenLink from "@/constants/screenlinks";
import { Redirect, Stack } from "expo-router";
import { useContext } from "react";

export default function AppLayout() {
  const { session } = useContext(AuthContext);

  if (!session) {
    return <Redirect href={ScreenLink.LOGIN} />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
