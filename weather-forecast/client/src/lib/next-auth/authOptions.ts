import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import NavigationLink from "@/constants/navigation/links";
import { getClient } from "@/lib/apollo/getClient";
import {
  GOOGLE_AUTH,
  LOGIN_USER,
  PlaceholderTranslationKey,
  REFRESH_TOKEN,
  translations,
} from "weather-forecast-common";

async function refreshToken(token: JWT): Promise<JWT> {
  const { data } = await getClient().mutate({
    mutation: REFRESH_TOKEN,
    context: {
      headers: {
        authorization: `Bearer ${token.refreshtoken}`,
      },
    },
  });
  const { accesstoken, refreshtoken, expiresin } = data!.refresh;
  return {
    ...token,
    accesstoken,
    refreshtoken,
    expiresin,
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: translations.en[PlaceholderTranslationKey.EMAIL],
          type: "text",
        },
        password: {
          label: translations.en[PlaceholderTranslationKey.PASSWORD],
          type: "password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const { email, password } = credentials;

        const { data, errors } = await getClient().mutate({
          mutation: LOGIN_USER,
          variables: {
            email,
            password,
          },
        });
        if (!data || errors) {
          return null;
        }
        return data.login as any;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  pages: {
    signIn: NavigationLink.LOGIN,
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user } as any;
      }

      if (new Date().getTime() < token.expiresin) {
        return token;
      }
      return await refreshToken(token);
    },

    async session({ token, session }) {
      const { email, refreshtoken, accesstoken, id } = token;
      session.email = email;
      session.refreshtoken = refreshtoken;
      session.accesstoken = accesstoken;
      session.id = id;
      return session;
    },

    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const { data, errors } = await getClient().mutate({
          mutation: GOOGLE_AUTH,
          variables: {
            idToken: account.id_token!,
          },
        });
        if (!data || errors) {
          return false;
        }
        Object.assign(user, data.googleAuth);
        return true;
      }
      return true;
    },
  },
};
