"use client";

import React, { useContext, useEffect, useState } from "react";
import DisplayCityWeather from "@/components/layout/DisplayCityWeather";
import AccessLoactionModal from "@/components/modals/AccessLoactionModal";
import { GlobalContext } from "@/providers/GlobalContextProvider";
import {
  getDisplayCityWetherParams,
  getForecastParams,
} from "@/fucntions/getParams";
import api from "@/api";

export default function Home() {
  const { pos, setPos } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (["loading", "unset"].includes(pos.status)) {
      setLoading(true);
      return;
    }
    let params;
    if (["denied", "error"].includes(pos.status)) {
      params = { q: "Surat" };
    } else {
      params = pos.position;
    }
    async function getData() {
      const data = await api(params);
      setData(data);
      const forecast = await api(params, "forecast");
      setForecast(forecast);
      setLoading(false);
    }
    getData();
  }, [pos?.status]);
  return (
    <>
      {!loading && (
        <DisplayCityWeather
          {...getDisplayCityWetherParams(data)}
          {...getForecastParams(forecast)}
        />
      )}
      <AccessLoactionModal />
    </>
  );
}
