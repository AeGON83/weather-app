"use client";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { SnackbarProvider } from "notistack";
import GlobalContextProvider from "./GlobalContextProvider";

export function Providers({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <GlobalContextProvider>
          <SnackbarProvider
            maxSnack={8}
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
            autoHideDuration={3000}
          >
            {children}
          </SnackbarProvider>
        </GlobalContextProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
