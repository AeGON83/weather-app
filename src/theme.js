"use client";

import { createTheme } from "@mui/material/styles";
import { poppins } from "./fonts";

let theme = createTheme({
  breakpoints: {
    values: {
      ss: 0,
      xs: 400,
      sm: 700,
      md: 1000,
      lg: 1200,
      xl: 1400,
    },
  },
});

theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  breakpoints: {
    values: {
      ss: 0,
      xs: 400,
      sm: 700,
      md: 1000,
      lg: 1200,
      xl: 1400,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          minWidth: 100,
          ".MuiInputBase-root": {
            borderRadius: 10,
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          },
          ".MuiInputBase-input": {
            fontFamily: poppins.style.fontFamily,
            fontWeight: 500,
            color: "#333",
            fontSize: 16,
            [theme.breakpoints.down("sm")]: {
              fontSize: 13,
            },
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderRadius: "12px !important",
            borderColor: "#0000",
          },
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#7385FF",
      o80: "#7385FFCC",
      o60: "#7385FF99",
      o50: "#7385FF80",
      o40: "#7385FF66",
      o20: "#7385FF33",
      o15: "#7385FF22",
      contrastText: "#fff",
      light: "#E5E9FF",
      dark: "#0017B3",
    },
    secondary: {
      main: "#fff",
      contrastText: "#7385FF",
    },
    info: {
      main: "#fff",
    },
    error: {
      main: "#930000",
      light: "#ffb3b3",
      o15: "#93000022",
    },
  },
});

export default theme;
