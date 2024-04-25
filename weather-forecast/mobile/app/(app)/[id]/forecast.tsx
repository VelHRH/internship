import WeatherProvider from "@/components/weather/WeatherProvider";
import ForecastWeather from "@/components/weather/forecast/ForecastWeather";

export default function Forecast() {
  return (
    <WeatherProvider>
      <ForecastWeather />
    </WeatherProvider>
  );
}
