import api from "@/api";
import DisplayCityWeather from "@/components/layout/DisplayCityWeather";
import {
  getDisplayCityWetherParams,
  getForecastParams,
} from "@/fucntions/getParams";
import React from "react";

export default async function CityWeather({
  params: { city = "Surat" },
  searchParams: { lat, lon },
}) {
  let params = { q: city };
  if (city == "latlon" && lat && lon) params = { lat, lon };
  const data = await api(params);
  const forecast = await api(params, "forecast");

  return (
    <DisplayCityWeather
      {...getDisplayCityWetherParams(data)}
      {...getForecastParams(forecast)}
    />
  );
}
