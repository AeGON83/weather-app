import api from "@/api";
import DisplayCityWeather from "@/components/layout/DisplayCityWeather";
import {
  getDisplayCityWetherParams,
  getForecastParams,
} from "@/fucntions/getParams";
import React from "react";

export default async function CityWeather({ params: { city = "Surat" } }) {
  const data = await api({ q: city });
  const forecast = await api({ q: city }, "forecast");

  return (
    <DisplayCityWeather
      {...getDisplayCityWetherParams(data)}
      {...getForecastParams(forecast)}
    />
  );
}
