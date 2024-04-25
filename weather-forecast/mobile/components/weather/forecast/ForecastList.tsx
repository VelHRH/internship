import { WeatherContext } from "@/components/weather/WeatherProvider";
import ForecastItem from "@/components/weather/forecast/ForecastItem";
import React, { useContext } from "react";
import { FlatList } from "react-native";

const ForecastList = () => {
  const { forecasts, loading, refetch } = useContext(WeatherContext);
  return (
    <FlatList
      style={{ paddingHorizontal: 20 }}
      data={forecasts}
      renderItem={({ item }) => <ForecastItem {...item} />}
      keyExtractor={(item) => item.time}
      refreshing={loading}
      onRefresh={refetch}
    />
  );
};

export default ForecastList;
