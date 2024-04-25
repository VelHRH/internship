import { useStorageState } from "@/hooks/useStorageState";
import { useMutation } from "@apollo/client";
import { createContext, useEffect } from "react";
import { LOGIN_USER, REFRESH_TOKEN } from "weather-forecast-common";
import { LoginInput } from "weather-forecast-common/graphql/__generated__/graphql";

type AuthCtx = {
  login: (loginInput: LoginInput) => Promise<void>;
  refreshToken: () => Promise<void>;
  logout: () => void;
  session?: string | null;
  isLoading: boolean;
};

export const AuthContext = createContext({} as AuthCtx);

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const [loginUser] = useMutation(LOGIN_USER);
  const [refresh] = useMutation(REFRESH_TOKEN, {
    context: {
      headers: {
        authorization: session
          ? `Bearer ${JSON.parse(session).refreshtoken}`
          : "",
      },
    },
  });

  const isSessionStale =
    session && new Date().getTime() >= JSON.parse(session).expiresin;

  useEffect(() => {
    if (isSessionStale) {
      refreshToken();
    }
  });

  const login = async (loginInput: LoginInput) => {
    const { data } = await loginUser({
      variables: loginInput,
    });
    const { accesstoken, refreshtoken, expiresin } = data!.login;
    setSession(JSON.stringify({ accesstoken, refreshtoken, expiresin }));
  };

  const refreshToken = async () => {
    try {
      const { data } = await refresh();
      const { accesstoken, refreshtoken, expiresin } = data!.refresh;
      setSession(JSON.stringify({ accesstoken, refreshtoken, expiresin }));
    } catch (err) {
      setSession(null);
    }
  };

  const logout = () => {
    setSession(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        session,
        isLoading,
        refreshToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
