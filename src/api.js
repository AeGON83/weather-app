import { notFound } from "next/navigation";

export default async function api(params, type) {
  const url = getUrl(params, type);

  try {
    const res = await fetch(url);
    if (res.status !== 200) {
      notFound();
    }
    return res.json();
  } catch (error) {
    console.error(error);
    notFound();
  }
}

function getUrl(params = {}, type = "weather") {
  const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP;
  const query = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
  return `https://api.openweathermap.org/data/2.5/${type}?${query}&cnt=40&units=metric&appid=${apiKey}`;
}
