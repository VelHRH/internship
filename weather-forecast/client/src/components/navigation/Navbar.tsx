import Box from "@mui/material/Box";
import { FC } from "react";

import HeaderStyleWrapper from "./HeaderStyleWrapper";

import SearchLocation from "@/components/locations/searchLoctions/SearchLocation";
import AuthButtons from "@/components/navigation/AuthButtons";
import Menu from "@/components/navigation/Menu";
import ThemeToggler from "@/components/theme/ThemeToggler";

const Navbar: FC = () => {
  return (
    <HeaderStyleWrapper>
      <Menu />
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          width: "50%",
          justifyContent: "end",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <SearchLocation />
        </Box>
        <ThemeToggler />
        <AuthButtons />
      </Box>
    </HeaderStyleWrapper>
  );
};
export default Navbar;
