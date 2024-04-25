import useCustomTheme from "@/hooks/useCustomTheme";
import { Tabs as ExpoTabs } from "expo-router";
import { FC, PropsWithChildren } from "react";

interface TabsProps extends PropsWithChildren {}

const Tabs: FC<TabsProps> = ({ children }) => {
  const { palette } = useCustomTheme();
  const tabBarActiveTintColor = palette!.primary?.main;
  const backgroundColor = palette!.background?.default;
  const screenOptions = {
    tabBarActiveTintColor,
    tabBarStyle: {
      backgroundColor,
      borderColor: backgroundColor,
    },
    headerShown: false,
  };
  return <ExpoTabs screenOptions={screenOptions}>{children}</ExpoTabs>;
};

export default Tabs;
