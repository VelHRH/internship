"use client";
import { SessionProvider } from "next-auth/react";
import { FC, PropsWithChildren } from "react";

import ThemeRegistry from "./theme/ThemeRegistry";

import { ApolloWrapper } from "@/lib/apollo/ApolloWrapper";

interface ProvidersProps extends PropsWithChildren {}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      <ApolloWrapper>
        <ThemeRegistry>{children}</ThemeRegistry>
      </ApolloWrapper>
    </SessionProvider>
  );
};

export default Providers;
