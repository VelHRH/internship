import { Link as MuiLink } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import NextLink from "next/link";
import { FC, PropsWithChildren } from "react";

import NavigationLink from "@/constants/navigation/links";

interface LinkProps extends PropsWithChildren {
  href: NavigationLink | string;
  animate?: boolean;
  variant?: Variant | "inherit";
}

const Link: FC<LinkProps> = ({ children, href, animate, variant = "h5" }) => (
  <MuiLink
    href={href}
    component={NextLink}
    variant={variant}
    sx={{
      color: "primary.main",
      fontWeight: 600,
      position: "relative",
      textDecoration: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        width: 0,
        height: "2px",
        bottom: 0,
        left: 0,
        backgroundColor: "primary.main",
        opacity: 0.7,
        transition: "width 0.3s ease, opacity 0.3s ease",
      },
      "&:hover::before": animate
        ? {
            width: "100%",
            opacity: 1,
          }
        : null,
    }}
  >
    {children}
  </MuiLink>
);

export default Link;
