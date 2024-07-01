import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import bgStyles from "@/styles/backdrops.module.css";
import cityStyles from "@/styles/city.module.css";

import logo1 from "../../../public/assets/icons/humidity.svg";
import logo2 from "../../../public/assets/icons/sunrise.svg";
import logo3 from "../../../public/assets/icons/wind.svg";
import logo4 from "../../../public/assets/icons/sunset.svg";

export default function DisplayCityWeather({
  temp,
  humidity,
  sunrise,
  sunset,
  windSpeed,
  weatherCondition,
  weatherDescription,
  cityName,
  date,
  time,
  forecast = [],
  country,
  icon,
}) {
  return (
    <Container className={cityStyles.container} maxWidth="xl" disableGutters>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        <Box
          className={`${bgStyles.main_bg} shadow_4 ${cityStyles.temp_container} entry_animation`}
          sx={{
            maxHeight: { ss: 600, xs: 600, sm: 400 },
            flexDirection: { ss: "column", xs: "column", sm: "row" },
            justifyContent: { ss: "center", xs: "center", sm: "space-between" },
            backgroundSize: { ss: "200% 130%", xs: "200% 130%", sm: "cover" },
            py: { ss: 4, xs: 4, sm: 2 },
          }}
        >
          <Stack
            gap={1}
            direction={"column"}
            justifyContent={"end"}
            alignItems={{ ss: "center", xs: "center", sm: "start" }}
          >
            <Avatar
              src={icon}
              alt="weather icon"
              sx={{
                width: 80,
                height: 80,
              }}
            />
            <Typography fontSize={100}>{temp}</Typography>
            <Stack
              direction={{ ss: "column", xs: "column", sm: "row" }}
              alignItems={{ ss: "center", xs: "center", sm: "baseline" }}
              gap={0.5}
              textAlign={"inherit"}
            >
              <Typography fontSize={22} fontWeight={500}>
                {weatherCondition}
              </Typography>
              <Typography fontSize={16}>({weatherDescription})</Typography>
            </Stack>
            <Typography
              fontSize={30}
              fontWeight={500}
            >{`${cityName}, ${country}`}</Typography>
          </Stack>
          <Stack
            direction={"column"}
            gap={1}
            justifyContent={"end"}
            textAlign={{ ss: "center", xs: "center", sm: "right" }}
          >
            <Typography fontWeight={600} fontSize={32}>
              {time}
            </Typography>
            <Typography fontSize={18}>{date}</Typography>
          </Stack>
        </Box>
        <Box
          key={temp}
          className="entry_animation dealy_3"
          sx={{
            maxWidth: { ss: 1000, xs: 1000, sm: 1000, md: 450 },
            borderRadius: 4,
            flexGrow: 1,
            outline: "1px solid #ddd9",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            <IconBox icon={logo1} name="Humidity" value={humidity} />
            <IconBox icon={logo2} name="Sunset" value={sunset} />
            <IconBox icon={logo3} name="Wind Speed" value={windSpeed} />
            <IconBox icon={logo4} name="Sunrise" value={sunrise} />
          </Box>
        </Box>
        <Box
          className="entry_animation dealy_3"
          sx={{
            flexBasis: "30%",
            borderRadius: 4,
            flexGrow: 1,
            outline: "1px solid #ddd9",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {forecast.map((day, i) => {
              return (
                <ForecastBox
                  key={i}
                  icon={day.icon}
                  date={day.date}
                  w1={day.weatherCondition}
                  w2={day.weatherDescription}
                  temp={day.temp}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

function IconBox({ name, icon, value }) {
  return (
    <Box sx={{ display: "flex", gap: 2, flexBasis: "45%", flexGrow: 1 }}>
      <Avatar
        src={icon.src}
        alt={name}
        variant="square"
        sx={{
          width: 40,
          height: 40,
        }}
      />
      <Stack direction={"column"} flexGrow={1}>
        <Typography sx={{ fontSize: 14, lineHeight: "140%" }}>
          {name}
        </Typography>
        <Typography sx={{ fontWeight: 600, fontSize: 16, lineHeight: "100%" }}>
          {value}
        </Typography>
      </Stack>
    </Box>
  );
}

function ForecastBox({ icon, temp, w1, w2, date }) {
  return (
    <Box sx={{ display: "flex", gap: 2, flexBasis: "45%", flexGrow: 1 }}>
      <Avatar
        src={icon}
        alt={date}
        sx={{
          width: 40,
          height: 40,
          background: "#EAE081",
          background: "linear-gradient(135deg, #EAE081, #E5C513)",
        }}
      />
      <Stack direction={"column"} flexGrow={1}>
        <Typography sx={{ fontSize: 14, lineHeight: "140%" }}>
          {date}
        </Typography>
        <Typography sx={{ fontWeight: 600, fontSize: 16, lineHeight: "100%" }}>
          {temp + " " + w1}
        </Typography>
      </Stack>
    </Box>
  );
}
