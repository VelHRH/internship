import useCustomTheme from "@/hooks/useCustomTheme";
import useGetWeather from "@/hooks/useGetWeather";
import { ApolloQueryResult } from "@apollo/client";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { FC, PropsWithChildren, createContext } from "react";
import { Exact, WeatherQuery } from "weather-forecast-common";

interface WeatherCtx {
  location?: WeatherQuery["getWeather"]["location"];
  current?: WeatherQuery["getWeather"]["current"];
  forecasts?: WeatherQuery["getWeather"]["forecasts"];
  loading: boolean;
  refetch: (
    variables?:
      | Partial<
          Exact<{
            locationId: number;
          }>
        >
      | undefined
  ) => Promise<ApolloQueryResult<WeatherQuery>>;
}

export const WeatherContext = createContext({} as WeatherCtx);

interface WeatherProviderProps extends PropsWithChildren {}

const WeatherProvider: FC<WeatherProviderProps> = ({ children }) => {
  const { id } = useLocalSearchParams();
  const { palette } = useCustomTheme();
  const backgroundColor = palette.primary.light;
  const backgroundColor2 = palette.background.default;

  const { current, forecasts, location, loading, refetch } = useGetWeather(
    parseInt(id!.toString())
  );

  const value = { location, current, forecasts, loading, refetch };
  return (
    <LinearGradient
      colors={[backgroundColor!, backgroundColor2!]}
      style={{
        backgroundColor,
        flex: 1,
      }}
    >
      <WeatherContext.Provider value={value}>
        {children}
      </WeatherContext.Provider>
    </LinearGradient>
  );
};

export default WeatherProvider;
