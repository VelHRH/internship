"use client";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";

import { ThemeToggleContext } from "./ThemeRegistry";

export default function ThemeToggler() {
  const { toggleIcon, toggleTheme } = useContext(ThemeToggleContext);

  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleTheme}>
      {toggleIcon}
    </IconButton>
  );
}
