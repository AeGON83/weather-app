import dayjs from "dayjs";

export function getDisplayCityWetherParams(data) {
  const { main, sys, wind, weather, name, dt } = data;
  return {
    temp: removeDecimal(main.temp) + "°",
    humidity: main.humidity + "%",
    sunrise: getTimeInHrs(sys.sunrise),
    sunset: getTimeInHrs(sys.sunset),
    windSpeed: wind.speed,
    icon: getIconUrl(weather[0].icon),
    weatherCondition: weather[0].main,
    weatherDescription: weather[0].description,
    cityName: name,
    date: getDateStd(dt),
    time: getTimeInHrs(dt),
  };
}

export function getForecastParams(data) {
  const { country } = data.city;
  const forecast = [];

  data.list.map((item, i) => {
    if (i % 8 == 0)
      forecast.push({
        temp: removeDecimal(item.main.temp) + "°",
        icon: getIconUrl(item.weather[0].icon),
        weatherCondition: item.weather[0].main,
        weatherDescription: item.weather[0].description,
        date: getDateStd(item.dt),
      });
  });

  return {
    country,
    forecast,
  };
}

export function getTimeInHrs(timestamp) {
  return dayjs.unix(timestamp).format("hh:mm A");
}

export function getDateStd(timestamp) {
  return dayjs.unix(timestamp).format("dddd, D MMMM, YY");
}

function getIconUrl(code) {
  return `https://openweathermap.org/img/wn/${code}@2x.png`;
}

function removeDecimal(num) {
  let str = num + ".";
  return str.substring(0, str.indexOf("."));
}
