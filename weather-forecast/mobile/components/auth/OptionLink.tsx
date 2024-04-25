import { Link } from "expo-router";
import { FC, PropsWithChildren } from "react";

interface OptionLinkProps extends PropsWithChildren {
  href: string;
}

const OptionLink: FC<OptionLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} style={{ fontFamily: "Montserrat-Bold" }}>
      {children}
    </Link>
  );
};

export default OptionLink;
