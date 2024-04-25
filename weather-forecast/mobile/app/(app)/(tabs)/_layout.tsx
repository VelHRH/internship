import Tabs from "@/components/ui/Tabs";
import IconSize from "@/constants/iconSizes";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs as ExpoTabs } from "expo-router";
import { ComponentProps } from "react";

function TabBarIcon(props: {
  name: ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
    <FontAwesome size={IconSize.BIG} style={{ marginBottom: -3 }} {...props} />
  );
}

export default function AppLayout() {
  return (
    <Tabs>
      <ExpoTabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <ExpoTabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
