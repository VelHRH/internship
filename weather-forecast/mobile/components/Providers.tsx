import { TranslationProvider } from "@/components/TranslationProvider";
import { SessionProvider } from "@/components/auth/SessionProvider";
import SearchProvider from "@/components/header/SearchProvider";
import client from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { FC, PropsWithChildren } from "react";
import Toast from "react-native-toast-message";

interface ProvidersProps extends PropsWithChildren {}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <SessionProvider>
        <TranslationProvider>
          <SearchProvider>{children}</SearchProvider>
          <Toast />
        </TranslationProvider>
      </SessionProvider>
    </ApolloProvider>
  );
};

export default Providers;
