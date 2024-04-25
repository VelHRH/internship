import Logo from "@/components/header/Logo";
import SearchInput from "@/components/header/SearchInput";
import ThemeView from "@/components/ui/view/ThemeView";
import useCustomTheme from "@/hooks/useCustomTheme";
import { usePathname } from "expo-router";

import { FC } from "react";

const Header: FC = () => {
  const pathname = usePathname();
  const { palette } = useCustomTheme();
  const backgroundColor =
    pathname.includes("current") || pathname.includes("forecast")
      ? palette.primary.light
      : undefined;
  return (
    <ThemeView
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        paddingTop: 30,
        justifyContent: "space-between",
        ...(backgroundColor && { backgroundColor }),
      }}
    >
      <Logo backgroundColor={backgroundColor} />
      <SearchInput />
    </ThemeView>
  );
};

export default Header;
